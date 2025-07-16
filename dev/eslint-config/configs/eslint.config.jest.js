import jest from "eslint-plugin-jest";

const recommended = jest.configs["flat/recommended"];

export default [
  {
    ...recommended,
    files: ["**/*.(spec|test).{js,jsx,ts,tsx}"],
    rules: {
      ...recommended.rules,
      "jest/expect-expect": [
        "error",
        {
          assertFunctionNames: ["expect", "expectTypeOf"],
        },
      ],
    },
  },
];
