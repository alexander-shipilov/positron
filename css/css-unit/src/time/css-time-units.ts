import { CssUnit } from "../unit/css-unit";
import { UnitSet } from "../utility";

import type { CssTimeUnit } from "./css-time-unit";

/**
 * The {@link CssTimeUnits} constant represents a dictionary that stores
 * the `<time>` units.
 *
 * @public
 */
export const CssTimeUnits = new UnitSet<CssTimeUnit>([
  CssUnit.ms, //
  CssUnit.s,
]);
