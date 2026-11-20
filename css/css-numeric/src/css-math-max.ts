import type { CssMathValue } from "./css-math-value";
import type { CssNumericArray } from "./css-numeric-array";

/**
 * The {@link CssMathMax} interface represents the CSS `max()` function, which
 * takes one or more comma-separated values as arguments and returns the
 * largest of them.
 *
 * @remarks
 *   If all arguments are absolute values, such as pixel lengths,`max()` is
 *   resolved to a single value at parse time, represented as
 *   a {@link CssUnitValue}.
 *
 *   If the `max()` expression can't be resolved to a single value at parse
 *   time (say, because one of its arguments uses a relative unit like `vw`
 *   or `%`), the function is represented as a {@link CssMathMax} object. The
 *   arguments passed to `max()` (or to the {@link CssMathMax} constructor) are
 *   exposed as the {@link CssMathMax.values} property.
 *
 *   The {@link CssMathMax} represents the `max()` function, not its resolved
 *   value.
 *
 * @public
 */
export interface CssMathMax extends CssMathValue {
  /**
   * The {@link CssMathMax.values} read-only property returns a
   * {@link CssNumericArray} containing the {@link CssNumericValue} objects
   * being compared to find the maximum.
   */
  readonly values: CssNumericArray;
}
