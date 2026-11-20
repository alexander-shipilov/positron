import type { NumericValueImpl } from "../numeric-value";

import type { MathValueClass } from "./math-value-class";

export interface MathValueImpl extends NumericValueImpl {
  readonly MathValue: MathValueClass;
}
