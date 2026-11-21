import { rules } from "../utils/rules.mjs";

import unionGroups from "./-union-groups.mjs";

export default rules({
  "perfectionist/sort-union-types": [
    "error",
    {
      groups: unionGroups,
    },
  ],
});
