import { rules } from "../utils/rules.js";

import unionGroups from "./-union-groups.js";

export default rules({
  "perfectionist/sort-intersection-types": [
    "error",
    {
      groups: unionGroups,
    },
  ],
});
