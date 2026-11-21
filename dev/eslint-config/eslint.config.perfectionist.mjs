import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";

import alphabet from "./perfectionist/-alphabet.mjs";
import sortClasses from "./perfectionist/sort-classes.mjs";
import sortExports from "./perfectionist/sort-exports.mjs";
import sortImports from "./perfectionist/sort-imports.mjs";
import sortInterfaces from "./perfectionist/sort-interfaces.mjs";
import sortIntersectionTypes from "./perfectionist/sort-intersection-types.mjs";
import sortModules from "./perfectionist/sort-modules.mjs";
import sortObjectTypes from "./perfectionist/sort-object-types.mjs";
import sortObjects from "./perfectionist/sort-objects.mjs";
import sortUnionTypes from "./perfectionist/sort-union-types.mjs";

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
      "sort-imports": "off",
      "sort-keys": "off",
    },
  },

  ...sortClasses,
  ...sortExports,
  ...sortImports,
  ...sortInterfaces,
  ...sortIntersectionTypes,
  ...sortModules,
  ...sortObjects,
  ...sortObjectTypes,
  ...sortUnionTypes,
);
