import react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig(
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
);
