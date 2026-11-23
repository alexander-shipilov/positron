import type { CssNumericValue } from "@positron/css-numeric";

import type { MathValueInternal } from "./math-value-internal";

/**
 * @public
 */
export interface MathClampInternal extends MathValueInternal {
  readonly lower: CssNumericValue;
  readonly upper: CssNumericValue;
  readonly value: CssNumericValue;
}
