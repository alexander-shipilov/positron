import PluginError from "plugin-error";
import through from "through2";

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

function isString(file, buffer) {
  return typeof file === "string" && buffer !== null;
}

function isFile(file, buffer) {
  return typeof file.isBuffer === "function" && file.isBuffer() && buffer !== null;
}

function isBuffer(file, buffer) {
  return Buffer.isBuffer(file) && buffer !== null;
}

function makePlugin(pluginOpts, opts) {
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
      case isString(file, buffer):
        processString(buffer, file, callback, opts);
        break;
      case isFile(file, buffer):
        processFile(buffer, file, encoding, callback, opts);
        break;
      case isBuffer(file, buffer):
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

export function plugin(pluginOpts) {
  return (opts) => {
    return through.obj(makePlugin(pluginOpts || {}, opts || {}));
  };
}
