import babelify from "babelify";
import brfs from "brfs-babel";
import browserify from "browserify";
import notify from "gulp-notify";
import path from "path";
import buffer from "vinyl-buffer";
import source from "vinyl-source-stream";
import watchify from "watchify";
import * as utils from "../utils";

function buildJS(bundler, dest, opts) {
  const stream = bundler.bundle();
  let before = [];

  before.push(
      () => source(path.basename(dest)),
      () => buffer()
  );

  if (opts.before) {
    before.push(...opts.before);
  }

  return utils.build(stream, path.dirname(dest), Object.assign({}, opts, { before }));
}

function getJs(entries, opts) {
  let paths;
  let bundler;

  entries = [].concat(entries);
  paths = entries.map((entry) => path.dirname(path.resolve(entry))).concat(opts.paths || []);

  bundler = browserify(entries, {
    paths: paths,
    detectGlobals: true,
    debug: opts.debug || false,
    cache: {},
    packageCache: {}
  });

  if (opts.require) {
    bundler = bundler.require(opts.require);
  }

  if (opts.external) {
    bundler = bundler.external(opts.external);
  }

  return bundler.transform(brfs).transform(babelify);
}

function build(config) {
  return utils.config.combine(config, function(dest, src, opts) {
    return buildJS(getJs(src, opts), dest, opts);
  });
}

function watch(config) {
  return utils.config.combine(config, function(dest, src, opts) {
    const bundler = getJs(src, opts);

    function rebuild() {
      buildJS(bundler, dest, opts).pipe(notify(dest + " build complete"));
    }

    return bundler
        .plugin(watchify, { poll: false })
        .on("update", rebuild)
        .bundle();
  });
}

export default {
  build: (config) => () => build(config),
  watch: (config) => () => watch(config)
};
