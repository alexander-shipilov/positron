import type { CssMathMin } from "./css-math-min";
import type { CssNumberish } from "./css-numberish";

/**
 * The {@link CssMathMinClass} interface represents a class for creating
 * instances of {@link CssMathMin}.
 *
 * @public
 */
export interface CssMathMinClass {
  /**
   * Creates a new {@link CssMathMin} object representing the CSS `min()`
   * function.
   *
   * @remarks
   *   Numeric arguments are wrapped into {@link CssUnitValue} objects with
   *   the `"number"` unit. All arguments are stored as separate items in the
   *   {@link CssMathMin.values} property.
   *
   * @param args - One or more numbers or {@link CssNumericValue} objects.
   *
   * @throws `SyntaxError` If no arguments are passed.
   *
   * @throws `TypeError` If one or more arguments are non-finite numbers or
   *   have incompatible types (for example, mixing a `<length>` with an
   *   `<angle>`).
   */
  new (...args: CssNumberish[]): CssMathMin;
}
