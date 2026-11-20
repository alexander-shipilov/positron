import { UnitSet } from "../utility";

import type { CssFontRelativeUnit } from "./css-font-relative-unit";
import { CssLocalFontRelativeUnits } from "./css-local-font-relative-units";
import { CssRootFontRelativeUnits } from "./css-root-font-relative-units";

/**
 * The {@link CssFontRelativeUnits} constant represents a dictionary that
 * stores the font relative units.
 *
 * @public
 */
export const CssFontRelativeUnits = new UnitSet<CssFontRelativeUnit>([
  ...CssLocalFontRelativeUnits,
  ...CssRootFontRelativeUnits,
]);
