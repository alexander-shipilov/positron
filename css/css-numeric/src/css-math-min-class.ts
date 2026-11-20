import type { CssMathMin } from "./css-math-min";
import type { CssNumberish } from "./css-numberish";

/**
 * The {@link CssMathMinClass} interface represents a class for creating
 * instances of {@link CssMathMin}.
 *
 * @public
 */
export interface CssMathMinClass<TInstance extends CssMathMin = CssMathMin> {
  /**
   * Creates a new {@link CssMathMin} object representing the CSS `min()`
   * function.
   *
   * @remarks
   *   Numeric arguments are wrapped into {@link CssUnitValue} objects with
   *   the `"number"` unit. All arguments are stored as separate items in
   *   the {@link CssMathMin.values} property.
   *
   * @param args - Arguments.
   *   One or more numbers or {@link CssNumericValue} objects.
   *
   * @throws `SyntaxError` if no arguments are passed.
   *
   * @throws `TypeError` if one or more arguments are non-finite numbers.
   *
   * @throws `TypeError` if one or more arguments have incompatible types (for
   *   example, mixing a `<length>` with an `<angle>`).
   */
  new (...args: readonly CssNumberish[]): TInstance;
}
