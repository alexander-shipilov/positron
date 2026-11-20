import { CssContainerPercentageUnits } from "../container";
import { CssFontRelativeUnits } from "../font";
import { UnitSet } from "../utility";
import { CssViewportPercentageUnits } from "../viewport";

import type { CssRelativeLengthUnit } from "./css-relative-length-unit";

/**
 * The {@link CssRelativeLengthUnits} constant represents a dictionary that
 * stores relative `<length>` units.
 *
 * @public
 */
export const CssRelativeLengthUnits = new UnitSet<CssRelativeLengthUnit>([
  ...CssContainerPercentageUnits,
  ...CssFontRelativeUnits,
  ...CssViewportPercentageUnits,
]);
