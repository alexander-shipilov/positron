import ts from "typescript-eslint";

export default [
  {
    ...ts.configs.disableTypeChecked,
    files: ["**/*.{js,jsx}"],
  },
];
