import { CssContainerPercentageUnits } from "../container/css-container-percentage-units";
import { CssFontRelativeUnits } from "../font/css-font-relative-units";
import { UnitSet } from "../utility/unit-set";
import { CssViewportPercentageUnits } from "../viewport/css-viewport-percentage-units";

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
