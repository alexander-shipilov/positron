import jest from "eslint-plugin-jest";
import { defineConfig } from "eslint/config";

const recommended = jest.configs["flat/recommended"];

export default defineConfig({
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
});
