import { rules } from "../utils/rules.mjs";

import { callbacks, customGroups } from "./-custom-groups.mjs";

export default rules({
  "perfectionist/sort-object-types": [
    "error",
    {
      customGroups,
      groups: ["unknown", callbacks],
      type: "custom",
    },
  ],
});
