import { CssUnit } from "../unit/css-unit";
import { UnitSet } from "../utility/unit-set";

import type { CssLocalFontRelativeUnit } from "./css-local-font-relative-unit";

/**
 * The {@link CssLocalFontRelativeUnits} constant represents a dictionary
 * that stores the local font-relative units.
 *
 * @public
 */
export const CssLocalFontRelativeUnits = new UnitSet<CssLocalFontRelativeUnit>([
  CssUnit.cap, //
  CssUnit.ch,
  CssUnit.em,
  CssUnit.ex,
  CssUnit.ic,
  CssUnit.lh,
]);
