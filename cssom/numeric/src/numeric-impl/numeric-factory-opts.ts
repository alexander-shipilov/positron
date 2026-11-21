import type {
  CssMathClamp,
  CssMathInvert,
  CssMathMax,
  CssMathMin,
  CssMathNegate,
  CssMathProduct,
  CssMathSum,
  CssMathValue,
  CssNumericValue,
  CssUnitValue,
} from "@positron/css-numeric";

import type { NumericFactory } from "./numeric-factory";

export interface NumericFactoryOpts {
  MathClamp: NumericFactory<CssMathClamp>;

  MathInvert: NumericFactory<CssMathInvert>;

  MathMax: NumericFactory<CssMathMax>;

  MathMin: NumericFactory<CssMathMin>;

  MathNegate: NumericFactory<CssMathNegate>;

  MathProduct: NumericFactory<CssMathProduct>;

  MathSum: NumericFactory<CssMathSum>;

  MathValue: NumericFactory<CssMathValue>;

  NumericValue: NumericFactory<CssNumericValue>;

  UnitValue: NumericFactory<CssUnitValue>;
}
