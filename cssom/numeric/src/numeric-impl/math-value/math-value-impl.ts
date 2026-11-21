import type { CssMathValueClass } from "@positron/css-numeric";

import type { NumericValueImpl } from "../numeric-value";

export interface MathValueImpl extends NumericValueImpl {
  readonly MathValue: CssMathValueClass;
}
