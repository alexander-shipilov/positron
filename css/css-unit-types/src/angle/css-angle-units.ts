import { CssUnit } from "../unit/css-unit";
import { UnitSet } from "../utility/unit-set";

import type { CssAngleUnit } from "./css-angle-unit";

/**
 * The {@link CssAngleUnits} constant represents a dictionary that stores the
 * `<angle>` units.
 *
 * @public
 */
export const CssAngleUnits = new UnitSet<CssAngleUnit>([
  CssUnit.deg, //
  CssUnit.grad,
  CssUnit.rad,
  CssUnit.turn,
]);
