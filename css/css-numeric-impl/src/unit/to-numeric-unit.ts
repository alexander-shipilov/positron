import type { Nullish } from "@positron/lang";

import { PERCENT_TOKEN } from "../shared/percent-token";
import { PERCENT_UNIT } from "../shared/percent-unit";

import type { NumericUnit } from "./numeric-unit";
import { NumericUnits } from "./numeric-units";

/**
 * @public
 */
export function toNumericUnit(unitLike: string): Nullish<NumericUnit> {
  return unitLike === PERCENT_TOKEN
    ? PERCENT_UNIT
    : NumericUnits.toUnit(unitLike);
}
