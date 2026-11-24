import { CssUnit } from "../unit/css-unit";
import { UnitSet } from "../utility/unit-set";

import type { CssAbsoluteLengthUnit } from "./css-absolute-length-unit";

/**
 * The {@link CssAbsoluteLengthUnits} constant represents a dictionary that
 * stores absolute `<length>` units.
 *
 * @public
 */
export const CssAbsoluteLengthUnits = new UnitSet<CssAbsoluteLengthUnit>([
  CssUnit.cm, //
  CssUnit.in,
  CssUnit.mm,
  CssUnit.pc,
  CssUnit.pt,
  CssUnit.px,
  CssUnit.q,
]);
