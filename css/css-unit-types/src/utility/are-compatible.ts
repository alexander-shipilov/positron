import type { CssUnit } from "../unit/css-unit";
import { CssCompatibleRatios } from "../compatible/css-compatible-ratios";
import { CssCompatibleUnits } from "../compatible/css-compatible-units";

/**
 * The {@link areCompatible} function checks whether two numeric units are
 * identical or share the same canonical unit.
 *
 * @param unit1 - The first numeric unit.
 *
 * @param unit2 - The second numeric unit.
 *
 * @returns `true` if `unit1` and `unit2` can be converted to each other;
 *   otherwise, `false`.
 */
export function areCompatible(unit1: CssUnit, unit2: CssUnit): boolean {
  return (
    unit1 === unit2 ||
    (CssCompatibleUnits.has(unit1) &&
      CssCompatibleUnits.has(unit2) &&
      CssCompatibleRatios[unit1][1] === CssCompatibleRatios[unit2][1])
  );
}
