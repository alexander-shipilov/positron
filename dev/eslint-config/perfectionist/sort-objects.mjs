import { rules } from "../utils/rules.mjs";

export default rules({
  "perfectionist/sort-objects": [
    "error",
    {
      groups: ["property", "method"],
    },
  ],
});
