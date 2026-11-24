import { assertNonNullable, debug, error, template } from "@positron/lang";

import type { CssCompatibleUnit } from "../compatible/css-compatible-unit";
import { CssCompatibleRatios } from "../compatible/css-compatible-ratios";
import { CssCompatibleUnits } from "../compatible/css-compatible-units";

import type { Dimension } from "./dimension";

/**
 * The {@link toCompatible} function converts a value expressed in a canonical
 * unit into the specified {@link CssCompatibleUnit}.
 *
 * @param value - The numeric value in canonical units.
 *
 * @param unit - The target compatible unit identifier.
 *
 * @returns The dimension converted into the target compatible unit.
 *
 * @throws `TypeError` If `unit` is not a {@link CssCompatibleUnit}.
 *
 * @public
 */
export function toCompatible(
  value: number,
  unit: string,
): Dimension<CssCompatibleUnit> {
  const compatible = assertNonNullable(CssCompatibleUnits.toUnit(unit), () =>
    error(template`Unit ${0} is not compatible`(debug(unit)), TypeError),
  );

  return [value / CssCompatibleRatios[compatible][0], compatible];
}
