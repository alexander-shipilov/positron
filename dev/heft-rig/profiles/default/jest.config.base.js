import { createDefaultPreset } from "ts-jest";

/** @import { Config } from "jest" */

/**
 * @type Config
 */
const config = {
  ...createDefaultPreset({ tsconfig: { ignoreDeprecations: "6.0" } }),
  testMatch: ["<rootDir>/src/**/*.spec.{ts,tsx}"],
};

export default config;
