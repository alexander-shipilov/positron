import type { CssMathUnary } from "./css-math-unary";
import type { CssNumericValue } from "./css-numeric-value";

/**
 * The {@link CssMathInvert} interface represents the inverse (reciprocal) of
 * a {@link CssNumericValue}.
 *
 * @remarks
 *   When you divide one {@link CssNumericValue} by another using `div()`, if
 *   the divisor is a plain number, it can immediately be scaled into a value
 *   of the original type.
 *
 *   If the divisor is a different type, the result can't be resolved to a
 *   single object. In this case, CSS represents the divisor as a
 *   {@link CssMathInvert}.
 *
 *   Generally you won't construct a {@link CssMathInvert} directly. It's
 *   produced when `div()` is called with a divisor that isn't a plain number:
 *   the result is a {@link CssMathProduct}, and {@link CssMathInvert} is the
 *   operand holding that divisor - found by walking the product's operands, or
 *   by checking {@link CssMathValue.operator} for the string
 *   {@link CssMathOperator.invert}.
 *
 *   {@link CssMathInvert} serializes using CSS `calc()` syntax,
 *   as `calc(1 / <value>)`.
 *
 * @public
 */
export interface CssMathInvert extends CssMathUnary {
  /**
   * The {@link CssMathInvert.value} read-only property returns the
   * {@link CssNumericValue} that is being inverted.
   */
  readonly value: CssNumericValue;
}
