import eslint from "@positron/eslint-config";

import base from "./eslint.config.base.js";

export default [
  ...base, //
  ...eslint.react,
];
