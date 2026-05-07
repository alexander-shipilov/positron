import { rules } from "../utils/rules.js";

export default rules({
  "perfectionist/sort-objects": [
    "error",
    {
      groups: ["property", "method"],
    },
  ],
});
