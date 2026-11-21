import type { CssMathVariadic } from "./css-math-variadic";
import type { CssNumericArray } from "./css-numeric-array";

/**
 * The {@link CssMathMin} interface represents the CSS `min()` function, which
 * takes one or more comma-separated values as arguments and returns the
 * smallest of them.
 *
 * @remarks
 *   If all arguments are absolute values, such as pixel lengths,`min()` is
 *   resolved to a single value at parse time, represented as
 *   a {@link CssUnitValue}.
 *
 *   If the `min()` expression can't be resolved to a single value at parse
 *   time (say, because one of its arguments uses a relative unit like `vw`
 *   or `%`), the function is represented as a {@link CssMathMin} object. The
 *   arguments passed to `min()` (or to the {@link CssMathMin} constructor) are
 *   exposed as the {@link CssMathMin.values} property.
 *
 *   The {@link CssMathMin} represents the `min()` function, not its resolved
 *   value.
 *
 * @public
 */
export interface CssMathMin extends CssMathVariadic {
  /**
   * The {@link CssMathMin.values} read-only property returns a
   * {@link CssNumericArray} containing the {@link CssNumericValue} objects
   * being compared to find the minimum.
   */
  readonly values: CssNumericArray;
}
