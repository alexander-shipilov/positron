import gulp from "gulp";
import * as utils from "../utils";

function copy(dest, src, opts) {
  return utils.build(gulp.src(src, opts), dest, Object.assign({}, opts, { name: "copy" }));
}

function build(config) {
  return utils.config.combine(config, copy);
}

function watch(config) {
  return gulp.watch(utils.config.source(config), build.bind(null, config));
}

export default {
  build: (config) => () => build(config),
  watch: (config) => () => watch(config)
};
