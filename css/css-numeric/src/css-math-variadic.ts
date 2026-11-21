import type { CssMathValue } from "./css-math-value";
import type { CssNumericArray } from "./css-numeric-array";

/**
 * The {@link CssMathVariadic} interface represents a variadic CSS math
 * operation holding multiple {@link CssNumericValue} operands.
 *
 * @public
 */
export interface CssMathVariadic extends CssMathValue {
  /**
   * The {@link CssMathVariadic.values} read-only property returns a
   * {@link CssNumericArray} containing the arguments of the
   * {@link CssMathVariadic} operation.
   */
  readonly values: CssNumericArray;
}
