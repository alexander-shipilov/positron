import type {
  CssMathSum,
  CssNumericValue,
  CssUnitValue,
} from "@positron/css-numeric";

import type { NumericSum } from "./sum/numeric-sum";

/**
 * @public
 */
export interface CssNumericConverterImpl {
  createSumValue($this: CssNumericValue): NumericSum;

  toMathSum($this: CssNumericValue, ...units: string[]): CssMathSum;

  toUnitValue($this: CssNumericValue, unit: string): CssUnitValue;
}
