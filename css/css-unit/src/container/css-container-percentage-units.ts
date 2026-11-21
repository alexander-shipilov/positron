import { CssUnit } from "../unit/css-unit";
import { UnitSet } from "../utility/unit-set";

import type { CssContainerPercentageUnit } from "./css-container-percentage-unit";

/**
 * The {@link CssContainerPercentageUnits} constant represents a dictionary
 * that stores the container percentage units.
 *
 * @public
 */
export const CssContainerPercentageUnits =
  new UnitSet<CssContainerPercentageUnit>([
    CssUnit.cqb, //
    CssUnit.cqh,
    CssUnit.cqi,
    CssUnit.cqmax,
    CssUnit.cqmin,
    CssUnit.cqw,
  ]);
