import config from "./profiles/default/eslint.config.base.js";

export default [
  {
    languageOptions: {
      globals: {
        process: "readonly",
      },
    },
  },
  ...config,
];
