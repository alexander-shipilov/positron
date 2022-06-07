module.exports = {
  extends: ["plugin:jest/recommended"],

  env: {
    "jest/globals": true,
  },
  plugins: ["jest"],
  rules: {
    "jest/expect-expect": [
      "warn",
      {
        assertFunctionNames: ["expect", "expectTypeOf"],
      },
    ],
  },
};
