"use strict";

/** @return Array */
function flatten(src) {
    return [].concat(...src);
}

module.exports = flatten;
