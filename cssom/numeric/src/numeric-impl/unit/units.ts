import { CssUnits, CssUnitSet } from "@positron/css-unit";

import { NUMBER_UNIT } from "../number";
import { PERCENT_UNIT } from "../percent";

import type { Unit } from "./unit";

/**
 * @public
 */
export const Units = new CssUnitSet<Unit>([
  ...CssUnits,
  NUMBER_UNIT,
  PERCENT_UNIT,
]);
