import type { CssMathInvert } from "./css-math-invert";
import type { CssNumberish } from "./css-numberish";

/**
 * The {@link CssMathInvertClass} interface represents a class for creating
 * instances of {@link CssMathInvert}.
 *
 * @typeParam TInstance - The instance type constructed by this class.
 *
 * @public
 */
export interface CssMathInvertClass<
  TInstance extends CssMathInvert = CssMathInvert,
> {
  /**
   * Creates a new {@link CssMathInvert} object representing the inversion
   * (reciprocal) of a {@link CssNumericValue}.
   *
   * @remarks
   *   Numeric argument is wrapped into a {@link CssUnitValue} object with the
   *   `"number"` unit.
   *
   * @param arg - A number or {@link CssNumericValue} object.
   *
   * @throws `TypeError` If `arg` is a non-finite number.
   */
  new (arg: CssNumberish): TInstance;
}
