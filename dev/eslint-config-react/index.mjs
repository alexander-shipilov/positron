import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import ts from "typescript-eslint";

import base from "@positron/eslint-config";

const reactConfig = defineConfig(
  {
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        projectService: true,
        sourceType: "module",
      },
    },
  },
  {
    files: ["**/*.jsx"],
    ...ts.configs.disableTypeChecked,
  },
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs.flat["recommended-latest"],
  {
    rules: {
      "perfectionist/sort-jsx-props": [
        "error",
        {
          customGroups: [
            {
              elementNamePattern: "^on[A-Z]",
              groupName: "callbacks",
            },
          ],
          groups: ["shorthand", "unknown", "callbacks"],
        },
      ],
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

export default {
  ...base,
  react: reactConfig,
};
