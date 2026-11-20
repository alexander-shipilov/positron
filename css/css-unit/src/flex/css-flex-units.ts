import { CssUnit } from "../unit";
import { UnitSet } from "../utility";

import type { CssFlexUnit } from "./css-flex-unit";

/**
 * The {@link CssFlexUnits} constant represents a dictionary that stores
 * the `<flex>` units.
 *
 * @public
 */
export const CssFlexUnits = new UnitSet<CssFlexUnit>([
  CssUnit.fr, //
]);
