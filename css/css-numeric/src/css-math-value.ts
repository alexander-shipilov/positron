import type { CssMathOperator } from "./css-math-operator";
import type { CssNumericValue } from "./css-numeric-value";

/**
 * The {@link CssMathValue} interface represents complex numeric values
 * produced by the CSS operators (i.e. addition, production) and functions
 * (i.e. `min()`, `max()`, `clamp()`).
 *
 * @public
 */
export interface CssMathValue extends CssNumericValue {
  /**
   * The {@link CssMathValue.operator} property returns the operator that the
   * current subtype represents.
   *
   * @remarks
   *   For example, if the current {@link CssMathValue} subtype is
   *   {@link CssMathSum}, this property will return the string `"sum"`.
   */
  readonly operator: CssMathOperator;
}
