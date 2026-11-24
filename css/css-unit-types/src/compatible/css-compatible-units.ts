import { CssAngleUnits } from "../angle/css-angle-units";
import { CssFrequencyUnits } from "../frequency/css-frequency-units";
import { CssAbsoluteLengthUnits } from "../length/css-absolute-length-units";
import { CssResolutionUnits } from "../resolution/css-resolution-units";
import { CssTimeUnits } from "../time/css-time-units";
import { UnitSet } from "../utility/unit-set";

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
