"use strict";

const PluginError = require("gulp-util").PluginError;
const through = require("through2");

function processFile(handler, file, encoding, callback, opts) {
    function write(contents) {
        file.contents = Buffer.from(contents, encoding);
        callback(null, file);
    }

    handler(write, file.contents.toString(encoding), opts);
}

function processBuffer(handler, buffer, callback, opts) {
    function write(contents) {
        callback(null, Buffer.from(contents));
    }

    handler(write, buffer.toString(), opts);
}

function processString(handler, string, callback, opts) {
    handler(callback.bind(null, null), string, opts);
}

function plugin(pluginOpts, opts) {
    return function(file, encoding, callback) {
        let buffer;

        if (typeof pluginOpts === "function") {
            pluginOpts = pluginOpts();
        }
        if (typeof opts === "function") {
            opts = opts();
        }

        buffer = typeof pluginOpts.buffer === "function" ? pluginOpts.buffer : null;

        switch (true) {
        case typeof file === "string" && buffer !== null:
            processString(buffer, file, callback, opts);
            break;
        case typeof file.isBuffer === "function" && file.isBuffer() && buffer !== null:
            processFile(buffer, file, encoding, callback, opts);
            break;
        case Buffer.isBuffer(file) && buffer !== null:
            processBuffer(buffer, file, callback, opts);
            break;
        case file === null:
            callback(null, file);
            break;
        default:
            this.emit("error", new PluginError(pluginOpts.name, "Unsupported input"));
        }
    };
}

module.exports = function(pluginOpts) {
    return (opts) => {
        return through.obj(plugin(pluginOpts || {}, opts || {}));
    };
};
