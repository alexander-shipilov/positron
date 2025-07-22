import { rules } from "../utils/rules.js";

import { callbacks, customGroups } from "./-custom-groups.js";

export default rules({
  "perfectionist/sort-jsx-props": [
    "error",
    {
      customGroups,
      groups: ["shorthand", "unknown", callbacks],
    },
  ],
});
