import { UnitSet } from "../utility";

import { CssUnit } from "./css-unit";

/**
 * The {@link CssUnits} constant represents a set of available units.
 *
 * @public
 */
export const CssUnits = new UnitSet<CssUnit>(Object.values(CssUnit));
