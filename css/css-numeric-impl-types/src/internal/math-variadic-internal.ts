import type { CssNumericValue } from "@positron/css-numeric";

import type { MathValueInternal } from "./math-value-internal";

/**
 * The {@link MathVariadicInternal} interface represents the internal slots of
 * a `CssMathVariadic` instance.
 *
 * @public
 */
export interface MathVariadicInternal extends MathValueInternal {
  /**
   * The {@link MathVariadicInternal.values} read-only property returns the
   * non-empty list of operands in the variadic math expression.
   */
  readonly values: readonly [CssNumericValue, ...CssNumericValue[]];
}
