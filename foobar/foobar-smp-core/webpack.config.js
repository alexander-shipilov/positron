import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import path from "path";

import createWebpackConfig from "@positron/heft-rig/profiles/default/webpack.config.base.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function createConfig(env, argv) {
  return await createWebpackConfig({
    argv: argv,
    configOverride: {
      entry: {
        index: path.resolve(__dirname, "lib", "esm", "index.js"),
        t: path.resolve(__dirname, "lib", "esm", "t.js"),
        test: path.resolve(__dirname, "lib", "esm", "test.js"),
      },
    },
    env: env,
    projectRoot: __dirname,
  });
}
