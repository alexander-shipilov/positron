import { rules } from "../utils/rules.js";

export default rules({
  "perfectionist/sort-interfaces": [
    "error",
    {
      groups: [
        "index-signature", //
        "property",
        "method",
      ],
    },
  ],
});
