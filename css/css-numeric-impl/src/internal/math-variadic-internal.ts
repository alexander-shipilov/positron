import type { CssNumericValue } from "@positron/css-numeric";

import type { MathValueInternal } from "./math-value-internal";

/**
 * @public
 */
export interface MathVariadicInternal extends MathValueInternal {
  readonly values: readonly [CssNumericValue, ...CssNumericValue[]];
}
