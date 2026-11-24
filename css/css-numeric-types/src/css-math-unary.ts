import type { CssMathValue } from "./css-math-value";
import type { CssNumericValue } from "./css-numeric-value";

/**
 * The {@link CssMathUnary} interface represents a unary CSS math operation
 * holding a single {@link CssNumericValue} operand.
 *
 * @public
 */
export interface CssMathUnary extends CssMathValue {
  /**
   * The {@link CssMathUnary.value} read-only property returns the operand of
   * the {@link CssMathUnary} operation.
   */
  readonly value: CssNumericValue;
}
