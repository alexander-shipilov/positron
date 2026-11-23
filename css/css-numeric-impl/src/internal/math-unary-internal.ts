import type { CssNumericValue } from "@positron/css-numeric";

import type { MathValueInternal } from "./math-value-internal";

/**
 * @public
 */
export interface MathUnaryInternal extends MathValueInternal {
  readonly value: CssNumericValue;
}
