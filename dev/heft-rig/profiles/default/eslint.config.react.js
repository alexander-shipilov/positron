import config from "@positron/eslint-config-react";

export default [
  ...config.core, //
  ...config.docs,
  ...config.jest,
  ...config.react,
  ...config.stylistic,
  ...config.prettier,
  ...config.perfectionist,
];
