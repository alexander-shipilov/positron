import type { CssNumberish, CssNumericValue } from "@positron/css-numeric";

/**
 * The {@link CssNumericComparerImpl} interface defines internal algorithms
 * for structural equality comparison of `CssNumericValue` instances.
 *
 * @public
 */
export interface CssNumericComparerImpl {
  /**
   * The {@link CssNumericComparerImpl.areEqualNumericValues} method determines
   * whether `value1` and `value2` represent structurally equal numeric values.
   *
   * @param value1 - The first `CssNumericValue` to compare.
   *
   * @param value2 - The second `CssNumericValue` to compare.
   *
   * @returns `true` if `value1` and `value2` are equal numeric values;
   *   otherwise, `false`.
   */
  areEqualNumericValues(
    value1: CssNumericValue,
    value2: CssNumericValue,
  ): boolean;

  /**
   * The {@link CssNumericComparerImpl.equalsNumericValue} method determines
   * whether every item in `values` is structurally equal to `$this`.
   *
   * @param $this - The target `CssNumericValue` instance.
   *
   * @param values - The numbers or `CssNumericValue` objects to compare.
   *
   * @returns `true` if every item equals `$this`; otherwise, `false`.
   */
  equalsNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): boolean;
}
