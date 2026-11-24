import type { Nullish } from "@positron/lang";

import { PERCENT_TOKEN } from "../shared/percent-token";
import { PERCENT_UNIT } from "../shared/percent-unit";

import type { NumericUnit } from "./numeric-unit";
import { NumericUnits } from "./numeric-units";

/**
 * The {@link toNumericUnit} function normalizes `unitLike` into a canonical
 * lowercase {@link NumericUnit} identifier, mapping `"%"` to
 * {@link PERCENT_UNIT}.
 *
 * @param unitLike - The raw unit string or percentage token to normalize.
 *
 * @returns The canonical {@link NumericUnit} identifier, or `null` if
 *   `unitLike` is not a recognized unit.
 *
 * @public
 */
export function toNumericUnit(unitLike: string): Nullish<NumericUnit> {
  return unitLike === PERCENT_TOKEN
    ? PERCENT_UNIT
    : NumericUnits.toUnit(unitLike);
}
