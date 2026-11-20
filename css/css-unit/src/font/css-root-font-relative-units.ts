import { CssUnit } from "../unit";
import { UnitSet } from "../utility";

import type { CssRootFontRelativeUnit } from "./css-root-font-relative-unit";

/**
 * The {@link CssRootFontRelativeUnits} constant represents a dictionary
 * that stores the root font relative units.
 *
 * @public
 */
export const CssRootFontRelativeUnits = new UnitSet<CssRootFontRelativeUnit>([
  CssUnit.rcap, //
  CssUnit.rch,
  CssUnit.rem,
  CssUnit.rex,
  CssUnit.ric,
  CssUnit.rlh,
]);
