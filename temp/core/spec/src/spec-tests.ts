import type { SpecKeyOf } from "./spec-key-of";
import type { SpecTest } from "./spec-test";

/**
 * Type {@link SpecTests} describes an object to test the specified `TTarget`
 */
export type SpecTests<TTarget extends object> = {
  [TKey in SpecKeyOf<TTarget>]: SpecTest;
};
