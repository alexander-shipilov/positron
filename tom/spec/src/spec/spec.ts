import type { SpecInterface } from "./spec-interface";
import type { SpecMetaKey } from "./spec-meta-key";
import type { SpecTest } from "./spec-test";

/**
 *
 */
export class Spec<
  TArgs extends unknown[] = [],
> implements SpecInterface<TArgs> {
  /**
   *
   */
  readonly [index: SpecMetaKey]: SpecTest<TArgs>;
}
