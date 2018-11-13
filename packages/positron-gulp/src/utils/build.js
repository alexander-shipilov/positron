import gulp from "gulp";
import plumber from "gulp-plumber";
import path from "path";

import { IS_PRODUCTION } from "./is-production";

export function build(stream, dest, opts) {
  let pipe;

  function handle(stream, pipe) {
    if (pipe) {
      stream = stream.pipe(pipe(dest));
    }

    return stream;
  }

  function apply(stream, pipes) {
    if (pipes && pipes.length) {
      stream = pipes.reduce(handle, stream);
    }

    return stream;
  }

  opts = opts || {};

  if (!IS_PRODUCTION) {
    stream = stream.pipe(plumber(function(error) {
      console.log(error);

      this.emit("end");
    }));
  }

  pipe = apply(stream, opts.before).pipe(gulp.dest(path.resolve(dest)));

  if (opts.after && opts.after.length) {
    pipe = apply(pipe, opts.after).pipe(gulp.dest(path.resolve(dest)));
  }

  return pipe;
}
