"use strict";

const childProcess = require("child_process");
const colors = require("colors");
const fs = require("fs");
const path = require("path");
const semver = require("semver");

const packages = {};
const fix = (process.argv.indexOf("--fix") !== -1);

const lernaDirectory = path.resolve(".");
const lernaConfigFile = path.resolve(lernaDirectory, "lerna.json");
const lernaConfig = require(lernaConfigFile);

const targetVersion = lernaConfig.version;
const targetDependency = `${targetVersion}`;

packages["lerna.json"] = lernaConfig;

if (!semver.valid(targetVersion)) {
    console.error(`Error: the version "${targetVersion}" in "${lernaConfigFile}" is invalid!`);
    process.exit(1);
}

const masterPackageFile = path.resolve(lernaDirectory, "package.json");
const masterPackage = require(masterPackageFile);

packages["package.json"] = masterPackage;

const packagesDirectory = path.resolve(lernaDirectory, "packages");
const packageNames = fs.readdirSync(packagesDirectory);

const badDependencies = {};
let mismatch = false;

function checkDependencies(packageName, otherPackage, dependencies) {
    Object.keys(dependencies).forEach((dependency) => {
        const currentValue = dependencies[dependency];

        if (dependency === otherPackage.name) {
            if (currentValue !== targetDependency) {
                if (!badDependencies[packageName]) {
                    badDependencies[packageName] = [];
                }

                badDependencies[packageName].push({ dependency: dependency, currentValue: currentValue });
                mismatch = true;
            }
        }
    });
}

function forEachPackage(handle) {
    Object.keys(packages).forEach((packageName) => handle(packages[packageName], packageName));
}


packageNames.forEach((packageName) => {
    const packageFile = path.resolve(packagesDirectory, packageName, "package.json");

    packages[packageName] = require(packageFile);
});


forEachPackage(({ version }) => {
    if (targetVersion !== version) {
        mismatch = true;
    }
});

forEachPackage(({ dependencies, devDependencies }, packageName) => {
    forEachPackage((otherPackage) => {
        if (dependencies) {
            checkDependencies(packageName, otherPackage, dependencies);
        }

        if (devDependencies) {
            checkDependencies(packageName, otherPackage, devDependencies);
        }
    });
});

if (mismatch) {
    if (fix) {
        const command =
            `lerna publish --skip-git --skip-npm --yes --repo-version ${targetVersion} --force-publish '*' --exact`;

        console.warn(`Status: running command ${command} to fix problems ...`);
        childProcess.execSync(command);
        console.warn(`Status: modifying "${masterPackageFile} to fix problems ...`);
        masterPackage.version = targetVersion;

        fs.writeFileSync(masterPackageFile, JSON.stringify(masterPackage, null, 2), "utf8");
    } else {
        console.error("Error: there is a mismatch between the versions of the packages in this repository!\n");

        forEachPackage((currentPackage, packageName) => {
            if (targetVersion !== currentPackage.version) {
                console.error(`  ${packageName} ${currentPackage.version.red} (should be ${targetVersion})`);
            } else {
                console.error(`  ${packageName} ${currentPackage.version.green}`);
            }

            if (badDependencies[packageName]) {
                badDependencies[packageName].forEach((badDependency) => {
                    console.error(`    ${badDependency.dependency}@${badDependency.currentValue.red}`
                        + ` (should be ${targetDependency})`);
                });
            }
        });

        console.error("\n");
        console.error(`Run "scripts/pkgcheck.js --fix" inside the directory "${lernaDirectory}" to resolve this problem`
            + ` and change the version to "${targetVersion}"`);

        process.exit(1);
    }
} else {
    console.log("Status: no problems detected!");
}
