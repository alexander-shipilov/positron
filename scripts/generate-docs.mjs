import { execFileSync } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
} from "node:fs";
import { join, resolve } from "node:path";

function parseJsonc(raw) {
  const withoutComments = raw.replace(
    /\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g,
    (match, comment) => (comment ? "" : match),
  );
  const withoutTrailingCommas = withoutComments.replace(
    /,\s*([\]}])/g,
    "$1",
  );

  return JSON.parse(withoutTrailingCommas);
}

function parseToPackages(argv) {
  const packages = [];

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--to" && argv[i + 1]) {
      packages.push(argv[i + 1]);
      i += 1;
    } else if (arg.startsWith("--to=")) {
      packages.push(arg.slice(5));
    }
  }

  return packages;
}

const rootDir = resolve(import.meta.dirname, "..");
const tempInputDir = join(rootDir, "common", "temp", "api-docs-input");
const outputDocsDir = join(rootDir, "docs");
const rushBin = process.platform === "win32" ? "rush.cmd" : "rush";
const apiDocumenterBin = join(
  rootDir,
  "common",
  "autoinstallers",
  "rush-docs",
  "node_modules",
  ".bin",
  process.platform === "win32" ? "api-documenter.cmd" : "api-documenter",
);

const rushRaw = readFileSync(join(rootDir, "rush.json"), "utf8");
const rushConfig = parseJsonc(rushRaw);
const toPackages = parseToPackages(process.argv.slice(2));

const targetProjects =
  toPackages.length > 0
    ? rushConfig.projects.filter((project) =>
        toPackages.includes(project.packageName),
      )
    : rushConfig.projects;

if (process.env.DOCS_FROM_BUILD !== "1") {
  const buildArgs = ["build"];

  for (const pkg of toPackages) {
    buildArgs.push("--to", pkg);
  }

  execFileSync(rushBin, buildArgs, {
    cwd: rootDir,
    env: { ...process.env, DOCS_FROM_BUILD: "1" },
    shell: process.platform === "win32",
    stdio: "inherit",
  });
}

rmSync(tempInputDir, { recursive: true, force: true });
mkdirSync(tempInputDir, { recursive: true });

let collectedCount = 0;

for (const project of targetProjects) {
  const distDir = join(rootDir, project.projectFolder, "dist");

  if (!existsSync(distDir)) {
    continue;
  }

  for (const file of readdirSync(distDir)) {
    if (file.endsWith(".api.json")) {
      const unscopedName = project.packageName.replace(/^@[^/]+\//, "");
      const targetName =
        file === "index.api.json" ? `${unscopedName}.api.json` : file;

      copyFileSync(join(distDir, file), join(tempInputDir, targetName));
      collectedCount += 1;
    }
  }
}

if (collectedCount === 0) {
  console.log("No .api.json files found to document.");
  process.exit(0);
}

rmSync(outputDocsDir, { recursive: true, force: true });
mkdirSync(outputDocsDir, { recursive: true });

execFileSync(
  apiDocumenterBin,
  ["markdown", "-i", tempInputDir, "-o", outputDocsDir],
  {
    cwd: rootDir,
    shell: process.platform === "win32",
    stdio: "inherit",
  },
);
