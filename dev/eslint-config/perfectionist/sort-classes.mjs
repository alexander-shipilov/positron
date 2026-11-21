import { rules } from "../utils/rules.mjs";

export default rules({
  "perfectionist/sort-classes": [
    "error",
    {
      groups: [
        "static-block",
        "static-property",
        "static-protected-property",
        "static-private-property",
        "static-method",
        "static-protected-method",
        "static-private-method",
        "index-signature",
        ["property", "accessor-property"],
        ["protected-property", "protected-accessor-property"],
        ["private-property", "private-accessor-property"],
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
