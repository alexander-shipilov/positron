import perfectionist from "eslint-plugin-perfectionist";

const customGroups = {
  callbacks: "^on[A-Z]",
  capitalized: "^[A-Z]",
};

const unionGroups = [
  "named",
  "keyword",
  "operator",
  "literal",
  "function",
  "import",
  "conditional",
  "object",
  "tuple",
  "intersection",
  "union",
  "nullish",
  "unknown",
];

export default [
  perfectionist.configs["recommended-natural"],
  {
    rules: {
      "@typescript-eslint/sort-type-constituents": "off",

      "perfectionist/sort-classes": [
        "error",
        {
          groups: [
            "static-block",
            "static-property",
            "static-method",
            "index-signature",
            ["property", "accessor-property"],
            ["private-property", "private-accessor-property"],
            ["protected-property", "protected-accessor-property"],
            ["get-method", "set-method"],
            "constructor",
            "method",
            "protected-method",
            "private-method",
            "unknown",
          ],
        },
      ],

      "perfectionist/sort-exports": ["error"],

      "perfectionist/sort-imports": [
        "error",
        {
          customGroups: [
            {
              elementNamePattern: ["^react$", "^react-.+"],
              groupName: "react-type",
              selector: "type",
            },
            {
              elementNamePattern: ["^react$", "^react-.+"],
              groupName: "react",
            },
            {
              elementNamePattern: ["\\.svg$", "\\.md$"],
              groupName: "resources",
            },
          ],
          groups: [
            "react-type",
            { newlinesBetween: 0 },
            "react",
            "type",
            { newlinesBetween: 0 },
            ["builtin", "external"],
            ["internal-type"],
            { newlinesBetween: 0 },
            ["internal"],
            "parent-type",
            { newlinesBetween: 0 },
            "parent",
            ["sibling-type", "index-type"],
            { newlinesBetween: 0 },
            ["sibling", "index"],
            ["style", "resources"],
            "side-effect",
            "object",
            "unknown",
          ],
          internalPatter: ["^@/", "^@positron/"],
          newlinesBetween: "always",
        },
      ],

      "perfectionist/sort-intersection-types": [
        "error",
        {
          groups: unionGroups,
        },
      ],

      "perfectionist/sort-jsx-props": [
        "error",
        {
          customGroups,
          groups: ["shorthand", "unknown", "callbacks"],
        },
      ],

      "perfectionist/sort-modules": [
        "error",
        {
          groups: [
            "export-enum",
            "export-interface",
            "export-type",
            "export-class",
            "export-function",
            "declare-enum",
            "declare-interface",
            "declare-type",
            "declare-class",
            "declare-function",
            "interface",
            "type",
            "class",
            "enum",
            "function",
            "unknown",
          ],
        },
      ],

      "perfectionist/sort-object-types": [
        "error",
        {
          customGroups,
          groups: ["capitalized", "unknown", "callbacks"],
        },
      ],

      "perfectionist/sort-objects": [
        "error",
        {
          customGroups,
          groups: ["capitalized", "unknown", "callbacks"],
        },
      ],

      "perfectionist/sort-union-types": [
        "error",
        {
          groups: unionGroups,
        },
      ],

      "sort-imports": "off",
      "sort-keys": "off",
    },
  },
];
