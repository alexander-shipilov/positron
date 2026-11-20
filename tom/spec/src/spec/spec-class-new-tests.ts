import type { SpecKey } from "./spec-key";
import type { SpecTest } from "./spec-test";

export interface SpecClassNewTests<TArgs extends unknown[] = []> {
  readonly [SpecKey.New]: SpecTest<TArgs>;
}
