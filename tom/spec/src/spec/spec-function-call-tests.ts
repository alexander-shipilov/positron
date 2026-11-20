import type { SpecKey } from "./spec-key";
import type { SpecTest } from "./spec-test";

export interface SpecFunctionCallTests<TArgs extends unknown[] = []> {
  readonly [SpecKey.Call]: SpecTest<TArgs>;
}
