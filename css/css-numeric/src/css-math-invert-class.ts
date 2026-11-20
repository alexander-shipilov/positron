import type { CssMathInvert } from "./css-math-invert";
import type { CssNumberish } from "./css-numberish";

/**
 * The {@link CssMathClampClass} interface represents a class for creating
 * instances of {@link CssMathClamp}.
 *
 * @public
 */
export interface CssMathInvertClass<
  TInstance extends CssMathInvert = CssMathInvert,
> {
  /**
   * Creates a new {@link CssMathInvertClass} object representing the
   * inversion (reciprocal) of a {@link CssNumericValue}.
   *
   * @remarks
   *   Numeric argument is wrapped into {@link CssUnitValue} objects with
   *   the `"number"` unit.
   *
   * @param arg - Argument. A number or {@link CssNumericValue} object.
   *
   * @throws `TypeError` if argument is a non-finite number.
   */
  new (arg: CssNumberish): TInstance;
}
