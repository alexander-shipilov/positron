import gulp from "gulp";
import notify from "gulp-notify";
import svgSprite from "gulp-svg-sprites";
import * as utils from "../utils";

function buildSprites(stream, dest, opts) {
  const before = [];

  before.push(
      () => svgSprite(Object.assign({}, opts.options))
  );

  return utils.build(stream, dest, { before: before });
}

function build(config) {
  return utils.config.combine(config, function(dest, src, opts) {
    return buildSprites(gulp.src(src), dest, {
      options: Object.assign({}, opts.options)
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
