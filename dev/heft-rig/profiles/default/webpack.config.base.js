import path from "path";
import { merge } from "webpack-merge";

import createWebpackConfigCommon from "../_shared/webpack.config.base.js";

async function createWebpackConfig({ env, argv, projectRoot, configOverride }) {
  // Documentation: https://webpack.js.org/configuration/
  const libraryOverrides = {
    target: ["web", "es5"],
    entry: {
      // Rush Stack convention is that the entry point for libraries is "src/index.ts"
      // whereas the entry point for apps is "src/start.ts"
      index: path.resolve(projectRoot, "lib", "esm", "index.ts"),
    },
    output: env.production
      ? {
          // For libraries, the filename is unhashed so that the package.json
          // "main" field can refer to it
          filename: `[name].js`,
          sourceMapFilename: "[name].js.map",
          library: {
            type: "module",
          },
        }
      : {},
    experiments: {
      outputModule: true,
    },
    devtool: "source-map",
  };

  return createWebpackConfigCommon({
    env: env,
    argv: argv,
    projectRoot: projectRoot,
    // "If you're building a design system or component library and shipping to NPM you shouldn't
    // extract just yet, let your consumers do it in their app."
    // https://compiledcssinjs.com/docs/css-extraction-webpack
    extractCssInProduction: false,
    configOverride: merge(libraryOverrides, configOverride),
  });
}

export default createWebpackConfig;
