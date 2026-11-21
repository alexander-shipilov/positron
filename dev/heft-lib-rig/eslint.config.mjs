import config from "./profiles/default/eslint.config.base.mjs";

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
