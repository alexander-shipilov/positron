import type { Config } from "jest";
import { createDefaultPreset } from "ts-jest";

const config: Config = {
  ...createDefaultPreset({ tsconfig: { ignoreDeprecations: "6.0" } }),
  testMatch: ["<rootDir>/src/**/*.spec.{ts,tsx}"],
};

export default config;
