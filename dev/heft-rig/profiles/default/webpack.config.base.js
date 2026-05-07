import path from "path";
import { merge } from "webpack-merge";

import createWebpackConfigCommon from "../_shared/webpack.config.base.js";

async function createWebpackConfig({ argv, configOverride, env, projectRoot }) {
  // Documentation: https://webpack.js.org/configuration/
  const libraryOverrides = {
    devtool: "source-map",
    entry: {
      // Rush Stack convention is that the entry point for libraries is "src/index.ts"
      // whereas the entry point for apps is "src/start.ts"
      index: path.resolve(projectRoot, "src", "index.ts"),
    },
    experiments: {
      outputModule: true,
    },
    output: env.production
      ? {
          // For libraries, the filename is unhashed so that the package.json
          // "main" field can refer to it
          filename: `[name].js`,
          library: {
            type: "module",
          },
          sourceMapFilename: "[name].js.map",
        }
      : {},
    target: ["web", "es5"],
  };

  return createWebpackConfigCommon({
    argv: argv,
    configOverride: merge(libraryOverrides, configOverride),
    env: env,
    // If you're building a design system or component library and shipping
    // to NPM you shouldn't extract just yet, let your consumers do it in their
    // app.
    // https://compiledcssinjs.com/docs/css-extraction-webpack
    extractCssInProduction: false,
    projectRoot: projectRoot,
  });
}

export default createWebpackConfig;
