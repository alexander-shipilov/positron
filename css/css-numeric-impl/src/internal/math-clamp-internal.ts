import type { CssNumericValue } from "@positron/css-numeric";

import type { MathValueInternal } from "./math-value-internal";

/**
 * The {@link MathClampInternal} interface represents the internal slots of a
 * `CssMathClamp` instance.
 *
 * @public
 */
export interface MathClampInternal extends MathValueInternal {
  /**
   * The {@link MathClampInternal.lower} read-only property returns the lower
   * bound operand.
   */
  readonly lower: CssNumericValue;

  /**
   * The {@link MathClampInternal.upper} read-only property returns the upper
   * bound operand.
   */
  readonly upper: CssNumericValue;

  /**
   * The {@link MathClampInternal.value} read-only property returns the
   * preferred value operand.
   */
  readonly value: CssNumericValue;
}
