import type { CssMathMax } from "./css-math-max";
import type { CssNumberish } from "./css-numberish";

/**
 * The {@link CssMathMaxClass} interface represents a class for creating
 * instances of {@link CssMathMax}.
 *
 * @typeParam TInstance - The instance type constructed by this class.
 *
 * @public
 */
export interface CssMathMaxClass<TInstance extends CssMathMax = CssMathMax> {
  /**
   * Creates a new {@link CssMathMax} object representing the CSS `max()`
   * function.
   *
   * @remarks
   *   Numeric arguments are wrapped into {@link CssUnitValue} objects with
   *   the `"number"` unit. All arguments are stored as separate items in the
   *   {@link CssMathMax.values} property.
   *
   * @param args - One or more numbers or {@link CssNumericValue} objects.
   *
   * @throws `SyntaxError` If no arguments are passed.
   *
   * @throws `TypeError` If one or more arguments are non-finite numbers or
   *   have incompatible types (for example, mixing a `<length>` with an
   *   `<angle>`).
   */
  new (...args: readonly CssNumberish[]): TInstance;
}
