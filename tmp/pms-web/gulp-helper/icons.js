"use strict";

import gulp from "gulp";
import path from "path";
import notify from "gulp-notify";
import iconFont from "gulp-iconfont";
import iconFontCss from "gulp-iconfont-css";

import utils from "./utils";

const DEFAULTS = {
    fontName: "iconfont",
    normalize: true,
    fontHeight: 1001,
    round: [10e12],
    formats: ["ttf", "woff", "woff2"]
};

function buildIcons(stream, dest, opts) {
    let before = [],
        options = Object.assign({}, DEFAULTS, opts.options);

    before.push(
        () => iconFontCss(Object.assign({}, options)),
        () => iconFont(Object.assign(options, {
            timestamp: Math.round(Date.now() / 1000)
        }))
    );

    return utils.build(stream, dest, { before: before });
}

function build(config) {
    return utils.config.combine(config, function(dest, src, opts) {
        return buildIcons(gulp.src(src + "/*.svg"), dest, {
            options: Object.assign({}, opts.options, { fontName: path.basename(src) })
        });
    });
}

function watch(config) {
    function rebuild() {
        return build(config).pipe(notify("icons rebuild"));
    }

    return gulp.watch(utils.config.source(config).map((src) => src + "/*.svg"), rebuild);
}

export default {
    build: (config) => () => build(config),
    watch: (config) => () => watch(config)
};
