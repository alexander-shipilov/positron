import type { SpecJestEnv } from "./spec-jest-env";

/**
 *
 */
export type SpecTest<TArgs extends unknown[] = []> = (
  env: SpecJestEnv,
  ...args: TArgs
) => void;
