import type { SpecMetaKey } from "./spec-meta-key";
import type { SpecTest } from "./spec-test";

export interface SpecInterface<TArgs extends unknown[] = []> {
  readonly [s: SpecMetaKey]: SpecTest<TArgs>;
}
