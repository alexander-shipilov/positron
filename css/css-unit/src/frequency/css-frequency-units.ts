import { CssUnit } from "../unit";
import { UnitSet } from "../utility";

import type { CssFrequencyUnit } from "./css-frequency-unit";

/**
 * The {@link CssFrequencyUnits} constant represents a dictionary that stores
 * the `<frequency>` units.
 *
 * @public
 */
export const CssFrequencyUnits = new UnitSet<CssFrequencyUnit>([
  CssUnit.hz,
  CssUnit.khz,
]);
