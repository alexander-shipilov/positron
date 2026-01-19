import { rules } from "../utils/rules.js";

export default rules({
  "perfectionist/sort-modules": [
    "error",
    {
      groups: [
        "declare-enum",
        "declare-interface",
        "declare-type",
        "declare-class",
        "declare-function",
        "interface",
        "type",
        "class",
        "enum",
        "function",
        "unknown",
        "export-enum",
        "export-interface",
        "export-type",
        "export-class",
        "export-function",
      ],
    },
  ],
});
