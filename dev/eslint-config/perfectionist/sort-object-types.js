import { rules } from "../utils/rules.js";

import { callbacks, customGroups } from "./-custom-groups.js";

export default rules({
  "perfectionist/sort-object-types": [
    "error",
    {
      customGroups,
      groups: ["unknown", callbacks],
    },
  ],
});
