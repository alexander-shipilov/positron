import { rules } from "../utils/rules.js";

export default rules({
  "perfectionist/sort-classes": [
    "error",
    {
      groups: [
        "static-block",
        "static-property",
        "static-method",
        "index-signature",
        ["property", "accessor-property"],
        ["private-property", "private-accessor-property"],
        ["protected-property", "protected-accessor-property"],
        ["get-method", "set-method"],
        "constructor",
        "method",
        "protected-method",
        "private-method",
        "unknown",
      ],
    },
  ],
});
