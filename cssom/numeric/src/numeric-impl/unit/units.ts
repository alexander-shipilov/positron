import { CssUnits, UnitSet } from "@positron/css-unit";

import { NUMBER_UNIT } from "../number";
import { PERCENT_UNIT } from "../percent";

import type { Unit } from "./unit";

/**
 * @public
 */
export const Units = new UnitSet<Unit>([
  ...CssUnits,
  NUMBER_UNIT,
  PERCENT_UNIT,
]);
