import { UnitSet } from "../utility";

import type { CssLengthUnit } from "./css-length-unit";
import { CssAbsoluteLengthUnits } from "./css-absolute-length-units";
import { CssRelativeLengthUnits } from "./css-relative-length-units";

/**
 * The {@link CssLengthUnits} constant represents a dictionary that stores
 * the `<length>` units.
 *
 * @public
 */
export const CssLengthUnits = new UnitSet<CssLengthUnit>([
  ...CssAbsoluteLengthUnits,
  ...CssRelativeLengthUnits,
]);
