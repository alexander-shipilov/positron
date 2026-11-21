import type { CssMathSum } from "./css-math-sum";
import type { CssNumberish } from "./css-numberish";

/**
 * The {@link CssMathSumClass} interface represents a class for creating
 * instances of {@link CssMathSum}.
 *
 * @typeParam TInstance - The instance type constructed by this class.
 *
 * @public
 */
export interface CssMathSumClass<TInstance extends CssMathSum = CssMathSum> {
  /**
   * Creates a new {@link CssMathSum} object representing the sum of the
   * arguments passed into it.
   *
   * @remarks
   *   Numeric arguments are wrapped into {@link CssUnitValue} objects with
   *   the `"number"` unit. All arguments are stored as separate items in the
   *   {@link CssMathSum.values} property.
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
