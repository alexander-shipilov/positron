import type { CssNumericArray } from "@positron/css-numeric";

import type { $values } from "../-internal";
import type { MathValue } from "../math-value";
import type { NumericValue } from "../numeric-value";

export interface MathVariadic extends MathValue {
  [$values]: [NumericValue, ...NumericValue[]];

  readonly values: CssNumericArray;
}
