import { CssUnit } from "../unit";
import { UnitSet } from "../utility";

import type { CssCanonicalUnit } from "./css-canonical-unit";

/**
 * The {@link CssCanonicalUnits} constant represents a dictionary that stores
 * canonical units.
 *
 * @public
 */
export const CssCanonicalUnits = new UnitSet<CssCanonicalUnit>([
  CssUnit.deg, //
  CssUnit.dppx,
  CssUnit.hz,
  CssUnit.px,
  CssUnit.s,
]);
