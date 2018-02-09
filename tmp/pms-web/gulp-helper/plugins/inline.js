"use strict";

const fs = require("fs");
const path = require("path");
const plugin = require("./plugin");

function inline(opts, str, tag) {
    const match = str.match(/src="([^"]+)/);
    let content;

    if (match) {
        content = fs.readFileSync(path.resolve(opts.base || ".", match[1]));

        if (content) {
            str = "<" + tag + ">" + content + "</" + tag + ">";
        }
    }

    return str;
}

module.exports = plugin({
    name: "gulp-expand",
    buffer: function(write, contents, opts) {
        write(contents.replace(/<(script|style) inline\b[^>]+><\/\1>/g, inline.bind(null, opts)));
    }
});
