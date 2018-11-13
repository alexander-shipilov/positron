import merge from "merge-stream";
import { flatten } from "./flatten";
import { values } from "./values";

const REGEXP = /\${([^}]+)}/g;

const toString = Object.prototype.toString.call.bind(Object.prototype.toString);
const TYPE_OBJECT = toString({});
const TYPE_STRING = toString("");
const TYPE_ARRAY = toString([]);

function expandString(value, config, cache = {}) {
  const replacer = ($0, $1) => expandValue($1.split(".").reduce((cfg, k) => cfg && cfg[k], config), config, cache);

  if (!cache.hasOwnProperty(value)) {
    cache[value] = value.replace(REGEXP, replacer);
  }

  return cache[value];
}

function expandObject(value, config, cache = {}) {
  return Object.assign({},
      ...Object.keys(value).map((k) => ({ [expandString(k, config, cache)]: expandValue(value[k], config, cache) })));
}

function expandArray(value, config, cache = {}) {
  return value.map((v) => expandValue(v, config, cache));
}

function expandValue(value, config, cache = {}) {
  const type = toString(value);
  let expand;

  if (type === TYPE_STRING) {
    expand = expandString;
  } else if (type === TYPE_ARRAY) {
    expand = expandArray;
  } else if (type === TYPE_OBJECT) {
    expand = expandObject;
  }

  return expand ? expand(value, config, cache) : value;
}

function getSource(opts, prop) {
  function src(opts) {
    return opts[prop || "src"] || opts;
  }

  return opts instanceof Array ? opts.map(src) : src(opts);
}

function combine(config, handle) {
  let stream;

  stream = flatten(Object.keys(config).map((dest) => {
    const opts = config[dest];

    function handler(opts) {
      return handle(dest, getSource(opts), opts.src ? Object.assign({}, opts) : {});
    }

    return opts instanceof Array ? flatten(opts.map(handler)) : handler(opts);
  }));

  if (stream.length) {
    stream = stream.length > 1 ? merge(...stream) : stream[0];
  }

  return stream;
}

function source(config, prop) {
  return flatten(values(config).map((opts) => getSource(opts, prop)));
}

function expand(data, config) {
  return data ? expandValue(data, config || data) : null;
}

export const config = {
  combine,
  expand,
  source
};
