import type { NumericTypeImpl } from "../type/numeric-type-impl";

/**
 * The {@link NumericValueInternal} interface represents the internal slots
 * shared by all `CssNumericValue` instances.
 *
 * @public
 */
export interface NumericValueInternal {
  /**
   * The {@link NumericValueInternal.type} read-only property returns the
   * computed numeric type of the value.
   */
  readonly type: NumericTypeImpl;
}
