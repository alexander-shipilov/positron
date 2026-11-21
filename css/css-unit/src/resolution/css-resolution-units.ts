import { CssUnit } from "../unit/css-unit";
import { UnitSet } from "../utility/unit-set";

import type { CssResolutionUnit } from "./css-resolution-unit";

/**
 * The {@link CssResolutionUnits} constant represents a dictionary that stores
 * the `<resolution>` units.
 *
 * @public
 */
export const CssResolutionUnits = new UnitSet<CssResolutionUnit>([
  CssUnit.dpcm, //
  CssUnit.dpi,
  CssUnit.dppx,
  CssUnit.x,
]);
