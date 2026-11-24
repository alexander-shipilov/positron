import { CssUnit } from "../unit/css-unit";
import { UnitSet } from "../utility/unit-set";

import type { CssViewportPercentageUnit } from "./css-viewport-percentage-unit";

/**
 * The {@link CssViewportPercentageUnits} constant represents a dictionary
 * that stores the viewport-percentage units.
 *
 * @public
 */
export const CssViewportPercentageUnits =
  new UnitSet<CssViewportPercentageUnit>([
    CssUnit.dvb,
    CssUnit.dvh,
    CssUnit.dvi,
    CssUnit.dvmax,
    CssUnit.dvmin,
    CssUnit.dvw,
    CssUnit.lvb,
    CssUnit.lvh,
    CssUnit.lvi,
    CssUnit.lvmax,
    CssUnit.lvmin,
    CssUnit.lvw,
    CssUnit.svb,
    CssUnit.svh,
    CssUnit.svi,
    CssUnit.svmax,
    CssUnit.svmin,
    CssUnit.svw,
    CssUnit.vb,
    CssUnit.vh,
    CssUnit.vi,
    CssUnit.vmax,
    CssUnit.vmin,
    CssUnit.vw,
  ]);
