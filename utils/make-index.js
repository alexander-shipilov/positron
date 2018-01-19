import { transform } from "babel-core";
import program from "commander";
import * as fs from "fs";
import path from "path";

const opts = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../.babelrc")).toString());

function transformCode(text, root) {
    text = text.replace(/(export\s+{[^}]+}\s+from\s+(['"]))(.+?)\2/g,
        ($0, $1, $2, $3) => $1 + $3.replace(/^\./, root) + $2);

    return transform(text, opts);
}

function makeIndex(folder, root) {
    const indexFile = path.resolve(folder, "index.js");
    const index = fs.existsSync(indexFile) && fs.readFileSync(indexFile) || "";

    if (!index) {
        throw new Error("index file expected");
    }

    return transformCode(index.toString(), root).code;
}

program
    .arguments("<folder>")
    .option("-o, --out-file <out>", "out file")
    .option("-r, --root <root>", "root (./lib)", "./lib")
    .action((folder, { root, outFile }) => {
        const index = makeIndex(folder, root);

        if (outFile) {
            console.log("make-index: " + folder + "/index.js --> " + outFile);

            fs.writeFileSync(outFile, index);
        } else {
            console.log(index);
        }
    });

program.parse(process.argv);

if (!program.args.length) {
    program.help();
}
