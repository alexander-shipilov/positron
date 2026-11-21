import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import ts from "typescript-eslint";

export default defineConfig(
  globalIgnores([
    "dist/", //
    "lib/",
    "temp/",
  ]),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2026,
        ...globals.node,
      },
    },
  },
  js.configs.recommended,
  ts.configs.strictTypeChecked,
  {
    files: ["**/*.{cjs,js,mjs,cts,mts,ts}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        projectService: true,
        sourceType: "module",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      complexity: [
        "error",
        {
          max: 7,
          variant: "modified",
        },
      ],
    },
  },
  {
    rules: {
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "separate-type-imports",
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          accessibility: "explicit",
        },
      ],
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/no-invalid-void-type": [
        "error",
        {
          allowAsThisParameter: true,
        },
      ],
      "@typescript-eslint/no-namespace": [
        "error",
        {
          allowDeclarations: true,
        },
      ],
    },
  },
  {
    files: ["**/*.{cjs,js,mjs}"],
    ...ts.configs.disableTypeChecked,
  },
  {
    ...importPlugin.flatConfigs.recommended,
    ...importPlugin.flatConfigs.typescript,
  },
  {
    rules: {
      "import/consistent-type-specifier-style": [
        "error", //
        "prefer-top-level",
      ],
    },
  },
);
