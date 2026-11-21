import { rules } from "../utils/rules.mjs";

const groups = ["type-export", { newlinesBetween: 1 }, "value-export"];

export default rules({
  "perfectionist/sort-exports": [
    "error",
    {
      groups,
      newlinesBetween: 0,
    },
  ],
});
