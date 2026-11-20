import type { CssNumericValue } from "@positron/css-numeric";

import type { $value } from "../internal";
import type { MathValue } from "../math-value";
import type { NumericValue } from "../numeric-value";

export interface MathUnary extends MathValue {
  [$value]: NumericValue;

  readonly value: CssNumericValue;
}
