import eslint from "@positron/eslint-config";

export default [
  ...eslint.core, //
  ...eslint.jest,
  ...eslint.prettier,
  ...eslint.perfectionist,
];
