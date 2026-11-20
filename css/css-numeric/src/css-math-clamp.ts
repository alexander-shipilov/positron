import type { CssMathValue } from "./css-math-value";
import type { CssNumericValue } from "./css-numeric-value";

/**
 * The {@link CssMathClamp} interface represents the CSS `clamp()` function,
 * which takes three arguments: a minimum, preferred, and maximum value, and
 * returns the preferred value, clamped between the minimum and maximum.
 *
 * @remarks
 *   If all three arguments are absolute values, such as pixel lengths,
 *   `clamp()` is resolved to a single value at parse time, represented as a
 *   {@link CssUnitValue}. If the `clamp()` expression can't be resolved to a
 *   single value at parse time (say, because one of its arguments uses a
 *   relative unit like `vw` or `%`), the function is represented as a
 *   {@link CssMathClamp} object. And the three arguments passed to `clamp()`
 *   (or to the {@link CssMathClamp} constructor) are exposed as the
 *   {@link CssMathClamp.lower}, {@link CssMathClamp.value}, and
 *   {@link CssMathClamp.upper} properties.
 *
 *   The {@link CssMathClamp} represents the `clamp()` function, not its
 *   resolved value.
 *
 * @public
 */
export interface CssMathClamp extends CssMathValue {
  /**
   * The {@link CssMathClamp.lower} read-only property returns a
   * {@link CssNumericValue} object representing the minimum value.
   */
  readonly lower: CssNumericValue;

  /**
   * The {@link CssMathClamp.upper} read-only property returns a
   * {@link CssNumericValue} object representing the maximum value.
   */
  readonly upper: CssNumericValue;

  /**
   * The {@link CssMathClamp.value} read-only property returns a
   * {@link CssNumericValue} instance representing the preferred value.
   */
  readonly value: CssNumericValue;
}
