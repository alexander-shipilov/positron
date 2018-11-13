import { config } from "../utils";
import { plugin } from "./plugin";

export const expand = plugin({
  name: "gulp-expand",
  buffer: function(write, contents, opts) {
    write(config.expand(contents, opts));
  }
});
