import reactHooks from "eslint-plugin-react-hooks";

import config from "@positron/eslint-config";

import base from "./eslint.config.base.js";

export default [
  ...base, //
  ...config.react,
  reactHooks.configs.flat["recommended-latest"],
];
