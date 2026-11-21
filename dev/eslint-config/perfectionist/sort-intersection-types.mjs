import { rules } from "../utils/rules.mjs";

import unionGroups from "./-union-groups.mjs";

export default rules({
  "perfectionist/sort-intersection-types": [
    "error",
    {
      groups: unionGroups,
    },
  ],
});
