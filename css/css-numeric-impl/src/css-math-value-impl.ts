import type { CssMathOperator, CssMathValue } from "@positron/css-numeric";

/**
 * @public
 */
export interface CssMathValueImpl {
  getMathValueOperator($this: CssMathValue): CssMathOperator;
}
