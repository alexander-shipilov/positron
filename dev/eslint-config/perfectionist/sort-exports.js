import { rules } from "../utils/rules.js";

const groups = [
  "type-export",
  { newlinesBetween: 1 },
  "value-export"
];

export default rules({
  "perfectionist/sort-exports": [
    "error",
    {
      groups
    }
  ]
});