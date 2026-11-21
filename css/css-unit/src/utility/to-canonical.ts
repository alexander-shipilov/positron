import { assertNonNullish, debug, error, template } from "@positron/lang";

import type { CssCanonicalUnit } from "../canonical/css-canonical-unit";
import { CssCompatibleRatios } from "../compatible/css-compatible-ratios";
import { CssCompatibleUnits } from "../compatible/css-compatible-units";

import type { Dimension } from "./dimension";

/**
 * The {@link toCanonical} function converts the provided dimension into the
 * canonical unit of measurement.
 *
 * @param value - The dimension numeric value.
 *
 * @param unit - The dimension unit identifier.
 *
 * @returns The dimension converted into its canonical unit of measurement.
 *
 * @throws `TypeError` If `unit` is not a {@link CssCompatibleUnit}.
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
