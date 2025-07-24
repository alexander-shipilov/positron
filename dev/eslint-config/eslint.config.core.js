import eslintjs from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslintjs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
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
    ...importPlugin.flatConfigs.recommended,
    ...importPlugin.flatConfigs.typescript,
  },
  {
    ...tseslint.configs.disableTypeChecked,
    files: ["**/*.{cjs,js,jsx,mjs}"],
  },

  [
    {
      rules: {
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            fixStyle: "separate-type-imports",
            prefer: "type-imports",
          },
        ],
        "@typescript-eslint/indent": "off",

        "import/consistent-type-specifier-style": [
          "error", //
          "prefer-top-level",
        ],
      },
    },
  ],
);
