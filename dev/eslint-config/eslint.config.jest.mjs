import jest from "eslint-plugin-jest";
import { defineConfig } from "eslint/config";

export default defineConfig({
  ...jest.configs["flat/recommended"],

  files: ["**/*.(spec|test).ts"],
  rules: {
    ...jest.configs["flat/recommended"].rules,

    "jest/expect-expect": [
      "error",
      {
        assertFunctionNames: ["expect", "expectTypeOf"],
      },
    ],
  },
});
