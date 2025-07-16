import js from "@eslint/js";
import globals from "globals";
import ts from "typescript-eslint";

import * as configs from "./configs/index.js";

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: "latest",
        projectService: true,
        sourceType: "module",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...configs.javascript,
  ...configs.typescript,
  ...configs.react,
  ...configs.jest,
  ...configs.prettier,
  ...configs.perfectionist,
);
