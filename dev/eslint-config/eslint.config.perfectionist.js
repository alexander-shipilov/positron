import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";

import alphabet from "./perfectionist/-alphabet.js";
import sortClasses from "./perfectionist/sort-classes.js";
import sortExports from "./perfectionist/sort-exports.js";
import sortImports from "./perfectionist/sort-imports.js";
import sortInterfaces from "./perfectionist/sort-interfaces.js";
import sortIntersectionTypes from "./perfectionist/sort-intersection-types.js";
import sortJsxProps from "./perfectionist/sort-jsx-props.js";
import sortModules from "./perfectionist/sort-modules.js";
import sortObjectTypes from "./perfectionist/sort-object-types.js";
import sortObjects from "./perfectionist/sort-objects.js";

export default defineConfig(
  {
    ...perfectionist.configs["recommended-custom"],

    settings: {
      perfectionist: {
        alphabet: alphabet.getCharacters(),
      },
    },
  },

  {
    rules: {
      "@typescript-eslint/adjacent-overload-signatures": "off",
      "@typescript-eslint/sort-type-constituents": "off",
      "import/order": "off",
      "react/jsx-sort-props": "off",
      "sort-imports": "off",
      "sort-keys": "off",
    },
  },

  ...sortClasses,
  ...sortExports,
  ...sortImports,
  ...sortInterfaces,
  ...sortIntersectionTypes,
  ...sortJsxProps,
  ...sortModules,
  ...sortObjects,
  ...sortObjectTypes,
);
