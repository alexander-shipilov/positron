import envify from "gulp-envify";
import uglify from "gulp-uglify";
import { expand } from "./plugins";
import { IS_PRODUCTION } from "./utils";

export default {
  uglify: () => IS_PRODUCTION ? () => uglify({ mangle: false, compress: false }) : null,
  envify: () => () => envify(process.env.NODE_ENV),
  expandify: (config) => expand(config)
};
