import { CssAngleUnits } from "../angle";
import { CssFrequencyUnits } from "../frequency";
import { CssAbsoluteLengthUnits } from "../length";
import { CssResolutionUnits } from "../resolution";
import { CssTimeUnits } from "../time";
import { UnitSet } from "../utility";

import type { CssCompatibleUnit } from "./css-compatible-unit";

/**
 * The {@link CssCompatibleUnits} constant represents a dictionary that stores
 * the compatible units.
 *
 * @public
 */
export const CssCompatibleUnits = new UnitSet<CssCompatibleUnit>([
  ...CssAbsoluteLengthUnits,
  ...CssAngleUnits,
  ...CssFrequencyUnits,
  ...CssResolutionUnits,
  ...CssTimeUnits,
]);
