import type { CssNumericTypePercentHint } from "@positron/css-numeric";
import type { Nullish } from "@positron/lang";

import type { NumericTypeEntries } from "./numeric-type-entries";
import type { NumericTypeImpl } from "./numeric-type-impl";

/**
 * @public
 */
export interface NumericTypeImplClass {
  new (
    entries?: Readonly<NumericTypeEntries>,
    percentHint?: Nullish<CssNumericTypePercentHint>,
  ): NumericTypeImpl;

  equalizePercentHints(type1: NumericTypeImpl, type2: NumericTypeImpl): void;
}
