import type { CssMathInvert } from "./css-math-invert";
import type { CssMathUnaryClass } from "./css-math-unary-class";
import type { CssNumberish } from "./css-numberish";

/**
 * The {@link CssMathInvertClass} interface represents a class for creating
 * instances of {@link CssMathInvert}.
 *
 * @public
 */
export interface CssMathInvertClass extends CssMathUnaryClass {
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
  new (arg: CssNumberish): CssMathInvert;
}
