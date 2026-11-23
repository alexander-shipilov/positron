import { CssUnits, UnitSet } from "@positron/css-unit";

import { PERCENT_UNIT } from "../shared/percent-unit";

import type { NumericUnit } from "./numeric-unit";
import { NUMBER_UNIT } from "./number-unit";

/**
 * @public
 */
export const NumericUnits = new UnitSet<NumericUnit>([
  ...CssUnits,
  NUMBER_UNIT,
  PERCENT_UNIT,
]);
