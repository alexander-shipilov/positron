import { assertNonNullable, debug, error, template } from "@positron/lang";

import type { CssCompatibleUnit } from "../compatible";
import { CssCompatibleRatios, CssCompatibleUnits } from "../compatible";

import type { Dimension } from "./dimension";

/**
 *
 * @param value -
 *
 * @param unit -
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
