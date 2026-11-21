import { CssCompatibleUnits } from "../compatible/css-compatible-units";

import type { Dimension } from "./dimension";
import { toCanonical } from "./to-canonical";

/**
 * The {@link compare} function compares two {@link Dimension} values by
 * converting compatible units to their canonical unit.
 *
 * @param value1 - The first dimension to compare.
 *
 * @param value2 - The second dimension to compare.
 *
 * @returns A negative number if `value1` is less than `value2`, `0` if they
 *   are equal, a positive number if `value1` is greater than `value2`, or
 *   `NaN` if the units are incompatible or unsupported.
 *
 * @public
 */
export function compare(value1: Dimension, value2: Dimension): number {
  if (
    CssCompatibleUnits.match(value1[1]) &&
    CssCompatibleUnits.match(value2[1])
  ) {
    const canonical1 = toCanonical(...value1);
    const canonical2 = toCanonical(...value2);

    return canonical1[1] === canonical2[1]
      ? canonical1[0] - canonical2[0]
      : NaN;
  }

  return NaN;
}
