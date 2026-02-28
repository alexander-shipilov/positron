import { rules } from "../utils/rules.js";

const customGroups = [
  {
    elementNamePattern: ["^react$", "^react-.+"],
    groupName: "type-react",
    selector: "type",
  },
  {
    elementNamePattern: ["^react$", "^react-.+"],
    groupName: "react",
  },
  {
    elementNamePattern: ["^@positron/.+"],
    groupName: "type-positron",
    selector: "type",
  },
  {
    elementNamePattern: ["^@positron/.+"],
    groupName: "positron",
  },
  {
    elementNamePattern: ["\\.svg$", "\\.md$"],
    groupName: "resources",
  },
];

const groups = [
  "type-react",
  { newlinesBetween: 0 },
  "react",
  "type-import",
  { newlinesBetween: 0 },
  ["value-builtin", "value-external"],
  ["type-positron"],
  { newlinesBetween: 0 },
  ["positron"],
  ["type-internal"],
  { newlinesBetween: 0 },
  ["value-internal"],
  "type-parent",
  { newlinesBetween: 0 },
  "parent",
  ["type-sibling", "type-index"],
  { newlinesBetween: 0 },
  ["value-sibling", "value-index"],
  ["style", "resources"],
  "side-effect",
  "ts-equals-import",
  "unknown",
];

export default rules({
  "perfectionist/sort-imports": [
    "error",
    {
      customGroups,
      groups,
      internalPattern: ["^@/"],
      newlinesBetween: 1,
    },
  ],
});
