import react from "eslint-plugin-react";

export default [
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  {
    rules: {
      // We use `perfectionist` to sort all
      "react/jsx-sort-props": "off",
    },
  },
];
