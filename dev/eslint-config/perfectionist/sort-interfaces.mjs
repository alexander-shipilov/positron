import { rules } from "../utils/rules.mjs";

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
