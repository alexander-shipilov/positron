import type { CssMathValue } from "./css-math-value";
import type { CssNumericValue } from "./css-numeric-value";

/**
 * The {@link CssMathNegate} interface represents the negation of a
 * {@link CssNumericValue}.
 *
 * @remarks
 *   {@link CssMathNegate} corresponds to applying unary minus to a numeric
 *   value (`x` becomes `-x`).
 *
 *   Generally you won't construct a {@link CssMathNegate} directly. It's
 *   produced by the internal negation step that `sub()` applies to its
 *   arguments before adding them: negating a {@link CssMathSum},
 *   {@link CssMathProduct}, {@link CssMathMin}, {@link CssMathMax},
 *   {@link CssMathClamp}, or {@link CssMathInvert} wraps it in a
 *   {@link CssMathNegate}. Negating a plain {@link CssUnitValue} (a length,
 *   percentage, etc.) instead flips the sign of its value directly, so
 *   subtracting simple values doesn't normally produce
 *   a {@link CssMathNegate}.
 *
 *   A {@link CssMathNegate} can also appear when reading a computed value: for
 *   example, `get()` on a property set with a `calc()` expression that
 *   subtracts a value returns a {@link CssMathSum} whose operands may include
 *   a {@link CssMathNegate}. You can identify it by checking the
 *   {@link CssMathValue.operator} property for the
 *   {@link CssMathOperator.negate} value.
 *
 *   {@link CssMathNegate} serializes using CSS `calc()` syntax, as
 *   `calc(-<value>)`.
 *
 * @public
 */
export interface CssMathNegate extends CssMathValue {
  /**
   * The {@link CssMathNegate.value} read-only property returns the
   * {@link CssNumericValue} that is being negated.
   */
  readonly value: CssNumericValue;
}
