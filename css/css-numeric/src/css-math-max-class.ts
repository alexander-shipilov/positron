import type { CssMathMax } from "./css-math-max";
import type { CssNumberish } from "./css-numberish";

/**
 * The {@link CssMathMaxClass} interface represents a class for creating
 * instances of {@link CssMathMax}.
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
   *   the `"number"` unit. All arguments are stored as separate items in
   *   the {@link CssMathMax.values} property.
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
