"use strict";

import path from "path";
import gulp from "gulp";
import rename from "gulp-rename";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import notify from "gulp-notify";

import utils from "./utils";

function buildSass(stream, dest, opts) {
    let before = [],
        options = Object.assign({}, opts.options);

    options.outputStyle = utils.IS_PRODUCTION ? "compressed" : "compacted";

    if (opts.before) {
        before.push(...opts.before);
    }

    before.push(() => sass(options));
    before.push(() => autoprefixer(["last 2 version", "ie 10"]));
    if (!utils.IS_PRODUCTION) {
        before.unshift(() => sourcemaps.init());
        before.push(() => sourcemaps.write({ includeContent: true }));
    }

    before.push(() => rename(path.basename(dest)));

    return utils.build(stream, path.dirname(dest), Object.assign({}, opts, { before }));
}

function build(config) {
    return utils.config.combine(config, function(dest, src, opts) {
        return buildSass(gulp.src(src), dest, opts);
    });
}

function watch(config) {
    function rebuild() {
        return build(config).pipe(notify("sass rebuild"));
    }

    return gulp.watch(utils.config.source(config, "watch"), { timeout: 5000, debounceDelay: 2000 }, rebuild);
}

export default {
    build: (config) => () => build(config),
    watch: (config) => () => watch(config)
};