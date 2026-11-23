import type { NumericUnit } from "../unit/numeric-unit";

import type { NumericValueInternal } from "./numeric-value-internal";

/**
 * @public
 */
export interface UnitValueInternal extends NumericValueInternal {
  readonly unit: NumericUnit;
  value: number;
}
