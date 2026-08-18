import config from "@positron/eslint-config";

export default [
  ...config.core, //
  ...config.jest,
  ...config.prettier,
  ...config.perfectionist,
];
