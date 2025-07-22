import perfectionist from "eslint-plugin-perfectionist";

import alphabet from "./perfectionist/-alphabet.js";
import sortClasses from "./perfectionist/sort-classes.js";
import sortImports from "./perfectionist/sort-imports.js";
import sortIntersectionTypes from "./perfectionist/sort-intersection-types.js";
import sortJsxProps from "./perfectionist/sort-jsx-props.js";
import sortModules from "./perfectionist/sort-modules.js";
import sortObjectTypes from "./perfectionist/sort-object-types.js";

export default [
  perfectionist.configs["recommended-custom"],

  {
    settings: {
      perfectionist: {
        alphabet: alphabet,
      },
    },
  },

  {
    rules: {
      "@typescript-eslint/adjacent-overload-signatures": "off",
      "@typescript-eslint/sort-type-constituents": "off",
      "react/jsx-sort-props": "off",
      "sort-imports": "off",
      "sort-keys": "off",
    },
  },

  ...sortClasses,
  ...sortImports,
  ...sortIntersectionTypes,
  ...sortJsxProps,
  ...sortModules,
  ...sortObjectTypes,
];
