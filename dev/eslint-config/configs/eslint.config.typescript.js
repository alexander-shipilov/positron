export default [
  {
    rules: {
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "separate-type-imports",
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/indent": "off",
    },
  },
];
