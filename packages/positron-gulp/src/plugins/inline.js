import fs from "fs";
import path from "path";
import { plugin } from "./plugin";

function inlinePlugin(opts, str, tag) {
  const match = str.match(/src="([^"]+)/);
  let content;

  if (match) {
    content = fs.readFileSync(path.resolve(opts.base || ".", match[1]));

    if (content) {
      str = "<" + tag + ">" + content + "</" + tag + ">";
    }
  }

  return str;
}

export const inline = plugin({
  name: "gulp-expand",
  buffer: function(write, contents, opts) {
    write(contents.replace(/<(script|style) inline\b[^>]+><\/\1>/g, inlinePlugin.bind(null, opts)));
  }
});
