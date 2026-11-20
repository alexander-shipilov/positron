import config from "@positron/eslint-config";

export default [
  ...config.core, //
  ...config.doc,
  ...config.jest,
  ...config.stylistic,
  ...config.prettier,
  ...config.perfectionist,
];
