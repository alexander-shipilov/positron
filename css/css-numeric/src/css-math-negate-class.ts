import type { CssMathNegate } from "./css-math-negate";
import type { CssNumberish } from "./css-numberish";

/**
 * The {@link CssMathNegateClass} interface represents a class for creating
 * instances of {@link CssMathNegate}.
 *
 * @public
 */
export interface CssMathNegateClass<
  TInstance extends CssMathNegate = CssMathNegate,
> {
  /**
   * Creates a new {@link CssMathNegate} object representing the negation
   * of the {@link CssNumericValue}.
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
