import program from "commander";
import * as fs from "fs";
import { dirname } from "path";
import { Helper } from "./Helper";

const mkdirp = require("mkdirp").sync;


function writeFile(path, contents) {
    mkdirp(dirname(path));
    fs.writeFileSync(path, contents);
}

function writeIndex(helper) {
    const { indexFull, index } = helper;
    const prevIndex = fs.existsSync(indexFull) && fs.readFileSync(indexFull) || "";

    if (prevIndex.indexOf(index) === -1) {
        writeFile(indexFull, (prevIndex ? prevIndex + "\n" : "") + index);
    }
}

function makeComponent(helper) {
    const { sourceFull, source, propTypesFull, propTypes, rendererFull, renderer, cssFull, css } = helper;

    writeFile(sourceFull, source);
    writeFile(propTypesFull, propTypes);
    writeFile(rendererFull, renderer);
    writeFile(cssFull, css);

    writeIndex(helper);
}

program
    .arguments("<names...>")
    .option("-f, --folder <path>", "output folder (./)", "./")
    .action((names, program) => {
        names.forEach((name) => {
            const helper = Helper.parse(name, program.folder);

            if (helper) {
                makeComponent(helper);
            } else {
                console.error("[ERROR]: unable to create component " + name);
            }
        });
    });

program.parse(process.argv);

if (!program.args.length) {
    program.help();
}
