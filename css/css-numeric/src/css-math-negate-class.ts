import type { CssMathNegate } from "./css-math-negate";
import type { CssNumberish } from "./css-numberish";

/**
 * The {@link CssMathNegateClass} interface represents a class for creating
 * instances of {@link CssMathNegate}.
 *
 * @typeParam TInstance - The instance type constructed by this class.
 *
 * @public
 */
export interface CssMathNegateClass<
  TInstance extends CssMathNegate = CssMathNegate,
> {
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
  new (arg: CssNumberish): TInstance;
}
