import js from "@eslint/js";
import globals from "globals";
import ts from "typescript-eslint";

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
  {
    ...ts.configs.disableTypeChecked,
    files: ["**/*.{cjs,js,jsx,mjs}"],
  },

  [
    {
      rules: {
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/indent": "off",
      },
    },
  ],
);
