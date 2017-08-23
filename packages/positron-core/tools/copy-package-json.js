import { mapToValues } from "/array";
import fs from "fs";
import path from "path";

const root = process.cwd();

const packageData = require(path.resolve(root, "package.json"));
const packageProps = [
    "name",
    "version",
    "description",
    "dependencies",
    "peerDependencies",
    "repository",
    "keywords",
    "author",
    "license",
    "bugs",
    "homepage"
];


function copyPackageJSON(dest) {
    const nextPackage = Object.assign(mapToValues(packageProps, prop => packageData[prop]), {
        main: "./index.js"
    });

    dest = path.resolve(root, dest, "package.json");

    fs.writeFile(dest, JSON.stringify(nextPackage, null, 2), (err) => {
        if (err) {
            throw (err);
        }

        console.log("Created " + dest);
    });
}

process.argv.slice(2).forEach(dest => copyPackageJSON(dest));