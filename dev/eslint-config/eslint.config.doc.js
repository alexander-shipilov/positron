import jsdoc, { getJsdocProcessorPlugin } from "eslint-plugin-jsdoc";
import tsdoc from "eslint-plugin-tsdoc";
import { defineConfig } from "eslint/config";
import ts, { parser as tsParser } from "typescript-eslint";

export default defineConfig(
  {
    files: ["**/*.{cjs,js,jsx,mjs,cts,mts,ts,tsx}"],
    name: "jsdoc/examples/processor",
    plugins: {
      examples: getJsdocProcessorPlugin({
        exampleCodeRegex: /^\s*```tsx?([\s\S]*)```\s*$/,
        matchingFileName: "example.jsdoc",
        paddedIndent: 2,
        parser: tsParser,
        sourceType: "module",
      }),
    },
    processor: "examples/examples",
  },
  {
    files: ["**/*.jsdoc"],
    languageOptions: {
      parser: tsParser,
    },
    name: "jsdoc/examples/rules",
    rules: {
      // Due to https://github.com/gajus/eslint-plugin-jsdoc/issues/1377 ,
      // `typescript-eslint` type-checked rules must currently be disabled
      ...ts.configs.disableTypeChecked.rules,
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "jsdoc/require-jsdoc": "off",
      "no-undef": "off",
    },
  },
  jsdoc.configs["flat/recommended-tsdoc"],
  {
    rules: {
      "jsdoc/check-line-alignment": [
        "error", //
        "never",
        {
          tags: [
            "param", //
            "privateRemarks",
            "remarks",
            "returns",
            "throws",
            "typeParam",
          ],
          wrapIndent: "  ",
        },
      ],
      "jsdoc/require-param": [
        "warn",
        {
          exemptedBy: ["inheritDoc"],
          ignoreWhenAllParamsMissing: true,
        },
      ],
      "jsdoc/require-returns": [
        "off",
        {
          exemptedBy: ["inheritDoc"],
        },
      ],
      "jsdoc/require-yields": "off",
      "jsdoc/tag-lines": [
        "error",
        "always",
        {
          applyToEndTag: false,
          count: 1,
          endLines: 0,
          maxBlockLines: 1,
          startLines: 1,
          startLinesWithNoTags: 0,
        },
      ],
    },
    settings: {
      jsdoc: {
        tagNamePreference: {
          return: "returns",
          template: "typeParam",
        },
      },
    },
  },
  {
    files: ["**/*.{cts,mts,ts,tsx}"],
    plugins: {
      tsdoc: tsdoc,
    },
    rules: {
      "tsdoc/syntax": "error",
    },
  },
);
