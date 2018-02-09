"use strict";

const config = require("../utils/config");
const plugin = require("./plugin");

module.exports = plugin({
    name: "gulp-expand",
    buffer: function(write, contents, opts) {
        write(config.expand(contents, opts));
    }
});
