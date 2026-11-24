import type { CssNumericValue } from "@positron/css-numeric";

import type { MathValueInternal } from "./math-value-internal";

/**
 * The {@link MathUnaryInternal} interface represents the internal slots of a
 * `CssMathUnary` instance.
 *
 * @public
 */
export interface MathUnaryInternal extends MathValueInternal {
  /**
   * The {@link MathUnaryInternal.value} read-only property returns the single
   * operand of the unary math expression.
   */
  readonly value: CssNumericValue;
}
