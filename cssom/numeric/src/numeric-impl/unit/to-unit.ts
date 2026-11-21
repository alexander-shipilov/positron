import type { Nullish } from "@positron/lang";

import { PERCENT_TOKEN, PERCENT_UNIT } from "../percent";

import type { Unit } from "./unit";
import { Units } from "./units";

/**
 *
 */
export function toUnit(unitLike: string): Nullish<Unit> {
  return unitLike === PERCENT_TOKEN ? PERCENT_UNIT : Units.toUnit(unitLike);
}
