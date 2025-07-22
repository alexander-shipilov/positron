import { rules } from "../utils/rules.js";

const customGroups = [
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
];

const groups = [
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
];

export default rules({
  "perfectionist/sort-imports": [
    "error",
    {
      customGroups,
      groups,
      internalPattern: ["^@positron/"],
      newlinesBetween: "always",
    },
  ],
});
