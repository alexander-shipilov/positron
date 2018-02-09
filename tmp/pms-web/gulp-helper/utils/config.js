"use strict";

const merge = require("merge-stream");
const flatten = require("./flatten");
const values = require("./values");

const REGEXP = /\$\{([^}]+)}/g;

const toString = Object.prototype.toString.call.bind(Object.prototype.toString);
const TYPE_OBJECT = toString({});
const TYPE_STRING = toString("");
const TYPE_ARRAY = toString([]);

function expand(value, config) {
    const cache = {};

    const expandString = (value) => {
        const replacer = ($0, $1) => expandValue($1.split(".").reduce((cfg, k) => cfg && cfg[k], config));

        if (!cache.hasOwnProperty(value)) {
            cache[value] = value.replace(REGEXP, replacer);
        }

        return cache[value];
    };

    const expandObject = (value) => Object.assign({},
        ...Object.keys(value).map((k) => ({ [expandString(k)]: expandValue(value[k]) })));

    const expandArray = (value) => value.map((v) => expandValue(v));

    const expander = {
        [TYPE_STRING]: expandString,
        [TYPE_ARRAY]: expandArray,
        [TYPE_OBJECT]: expandObject
    };

    const expandValue = (value) => (expander[toString(value)] || ((value) => value))(value);

    return config ? expandValue(value) : null;
}

function source(opts, prop) {
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
            return handle(dest, source(opts), opts.src ? Object.assign({}, opts) : {});
        }

        return opts instanceof Array ? flatten(opts.map(handler)) : handler(opts);
    }));

    if (stream.length) {
        stream = stream.length > 1 ? merge(...stream) : stream[0];
    }

    return stream;
}

module.exports = {
    source: (config, prop) => flatten(values(config).map((opts) => source(opts, prop))),
    expand: (data, config) => expand(data, config || data, {}),
    combine: combine
};
