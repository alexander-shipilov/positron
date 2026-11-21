import type {
  CssMathValue,
  CssNumericValue,
  CssUnitValue,
} from "@positron/css-numeric";

import type { MathValue } from "../math-value";
import type { NumericValue } from "../numeric-value";
import type { UnitValue } from "../unit-value";

export interface NumericRegistryImpl {
  getNumericValue($this: CssNumericValue): NumericValue;
  getUnitValue($this: CssUnitValue): UnitValue;
  MathValue($this: CssMathValue): MathValue;
}
