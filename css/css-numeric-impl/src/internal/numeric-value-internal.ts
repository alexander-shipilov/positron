import type { NumericTypeImpl } from "../type/numeric-type-impl";

/**
 * @public
 */
export interface NumericValueInternal {
  readonly type: NumericTypeImpl;
}
