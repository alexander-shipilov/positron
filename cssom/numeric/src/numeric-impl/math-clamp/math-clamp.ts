import type { CssMathClamp } from "@positron/css-numeric";

import type { $lower, $upper, $value } from "../-internal";
import type { MathValue } from "../math-value";
import type { NumericValue } from "../numeric-value";

export interface MathClamp extends CssMathClamp, MathValue {
  [$lower]: NumericValue;
  [$upper]: NumericValue;
  [$value]: NumericValue;
}
