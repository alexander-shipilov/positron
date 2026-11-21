import { CssUnit } from "../unit/css-unit";
import { UnitSet } from "../utility/unit-set";

import type { CssFlexUnit } from "./css-flex-unit";

/**
 * The {@link CssFlexUnits} constant represents a dictionary that stores the
 * `<flex>` units.
 *
 * @public
 */
export const CssFlexUnits = new UnitSet<CssFlexUnit>([
  CssUnit.fr, //
]);
