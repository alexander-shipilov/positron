import type { CssMathNegate } from "./css-math-negate";
import type { CssMathUnaryClass } from "./css-math-unary-class";
import type { CssNumberish } from "./css-numberish";

/**
 * The {@link CssMathNegateClass} interface represents a class for creating
 * instances of {@link CssMathNegate}.
 *
 * @public
 */
export interface CssMathNegateClass extends CssMathUnaryClass {
  /**
   * Creates a new {@link CssMathNegate} object representing the negation of a
   * {@link CssNumericValue}.
   *
   * @remarks
   *   Numeric argument is wrapped into a {@link CssUnitValue} object with the
   *   `"number"` unit.
   *
   * @param arg - A number or {@link CssNumericValue} object.
   *
   * @throws `TypeError` If `arg` is a non-finite number.
   */
  new (arg: CssNumberish): CssMathNegate;
}
