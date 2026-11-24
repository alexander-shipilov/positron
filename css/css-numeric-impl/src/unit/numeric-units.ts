import { CssUnits, UnitSet } from "@positron/css-unit";

import { NUMBER_UNIT } from "../shared/number-unit";
import { PERCENT_UNIT } from "../shared/percent-unit";

import type { NumericUnit } from "./numeric-unit";

/**
 * The {@link NumericUnits} read-only variable represents a case-insensitive
 * dictionary containing all {@link NumericUnit} identifiers.
 *
 * @public
 */
export const NumericUnits = new UnitSet<NumericUnit>([
  ...CssUnits,
  NUMBER_UNIT,
  PERCENT_UNIT,
]);
