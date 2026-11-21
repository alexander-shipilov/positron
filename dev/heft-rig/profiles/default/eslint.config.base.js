import config from "@positron/eslint-config";

export default [
  ...config.core, //
  ...config.docs,
  ...config.jest,
  ...config.stylistic,
  ...config.prettier,
  ...config.perfectionist,
];
