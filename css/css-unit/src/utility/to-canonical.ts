import { assertNonNullish, debug, error, template } from "@positron/lang";

import type { CssCanonicalUnit } from "../canonical";
import { CssCompatibleRatios, CssCompatibleUnits } from "../compatible";

import type { Dimension } from "./dimension";

/**
 * The {@link toCanonical} function converts the provided dimension into the
 * canonical unit of measurement.
 *
 * @param value - The dimension value
 *
 * @param unit - The dimension unit
 *
 * @returns The dimension converted into a canonical unit of measurement.
 *
 * @throws `TypeError` - if `unit` is not a {@link CssCompatibleUnit}.
 *
 * @public
 */
export function toCanonical(
  value: number,
  unit: string,
): Dimension<CssCanonicalUnit> {
  const compatible = assertNonNullish(CssCompatibleUnits.toUnit(unit), () =>
    error(template`Unit ${0} is not compatible`(debug(unit)), TypeError),
  );
  const { [compatible]: ratio } = CssCompatibleRatios;

  return [value * ratio[0], ratio[1]];
}
