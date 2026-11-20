import type { CssMathValue } from "./css-math-value";
import type { CssNumericArray } from "./css-numeric-array";

/**
 * The {@link CssMathProduct} interface represents the product of two or more
 * {@link CssNumericValue} values - in cases where the result can't be
 * represented as a single value.
 *
 * @remarks
 *   A {@link CssMathProduct} is produced whenever a multiplication or division
 *   can't be resolved to a single value. This happens when any of the values
 *   is itself a calculation rather than a single unit value — for example,
 *   multiplying or dividing a sum such as `1px + 2%`. It also happens for a
 *   multiplication when more than one value has a unit, for example
 *   `10px * 20px` or a length times a percentage, and for a division whenever
 *   a divisor has a unit, for example `10px / 2px` or `10 / 2px`.
 *
 *   The `mul()` function returns a single {@link CssUnitValue} only if every
 *   value is a {@link CssUnitValue} and all of them, or all but one, are plain
 *   numbers.
 *
 *   The `div()` function works the same way, except that every divisor must be
 *   a plain number. Otherwise, both methods return a {@link CssMathProduct}.
 *
 *   The {@link CssMathProduct} object represents the product expression
 *   itself, not a resolved value.
 *
 * @public
 */
export interface CssMathProduct extends CssMathValue {
  /**
   * The {@link CssMathProduct.values} read-only property returns a
   * {@link CssNumericArray} containing the {@link CssNumericValue} objects
   * being multiplied together.
   */
  readonly values: CssNumericArray;
}
