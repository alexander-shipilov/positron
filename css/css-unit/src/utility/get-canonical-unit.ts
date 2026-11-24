import type { Nullish } from "@positron/lang";

import type { CssCanonicalUnit } from "../canonical/css-canonical-unit";
import type { CssUnit } from "../unit/css-unit";
import { CssCompatibleRatios } from "../compatible/css-compatible-ratios";
import { CssCompatibleUnits } from "../compatible/css-compatible-units";

export function getCanonicalUnit(unit: CssUnit): Nullish<CssCanonicalUnit> {
  return CssCompatibleUnits.has(unit) ? CssCompatibleRatios[unit][1] : null;
}
