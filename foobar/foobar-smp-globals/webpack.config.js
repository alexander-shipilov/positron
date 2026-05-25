import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import createWebpackConfig from "@positron/heft-rig/profiles/default/webpack.config.base.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function createConfig(env, argv) {
  return await createWebpackConfig({
    argv: argv,
    env: env,
    projectRoot: __dirname,
  });
}
