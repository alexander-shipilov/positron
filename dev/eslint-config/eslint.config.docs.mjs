import jsdoc, { getJsdocProcessorPlugin } from "eslint-plugin-jsdoc";
import tsdoc from "eslint-plugin-tsdoc";
import { defineConfig } from "eslint/config";
import ts, { parser as tsParser } from "typescript-eslint";

export default defineConfig(
  {
    files: ["**/*.{cts,mts,ts,tsx}"],
    name: "tsdoc/examples/processor",
    plugins: {
      examples: getJsdocProcessorPlugin({
        exampleCodeRegex: /```tsx?\s*\n([\s(\S)]*?)```/,
        matchingFileName: "example.tsdoc",
        paddedIndent: 2,
        parser: tsParser,
        sourceType: "module",
      }),
    },
    processor: "examples/examples",
  },
  {
    files: ["**/*.tsdoc"],
    languageOptions: {
      parser: tsParser,
    },
    name: "tsdoc/examples/rules",
    rules: {
      ...ts.configs.disableTypeChecked.rules,
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "jsdoc/require-jsdoc": "off",
      "no-unused-vars": "off",
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
      "jsdoc/check-tag-names": [
        "error",
        {
          definedTags: [],
          jsxTags: false,
          typed: false,
        },
      ],
      "jsdoc/no-types": "error",
      "jsdoc/require-jsdoc": "off",
      "jsdoc/require-param": [
        "warn",
        {
          exemptedBy: ["inheritDoc"],
          ignoreWhenAllParamsMissing: true,
        },
      ],
      "jsdoc/require-param-type": "off",
      "jsdoc/require-property": "off",
      "jsdoc/require-property-description": "off",
      "jsdoc/require-property-name": "off",
      "jsdoc/require-property-type": "off",
      "jsdoc/require-returns": "off",
      "jsdoc/require-returns-type": "off",
      "jsdoc/require-template": "off",
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
