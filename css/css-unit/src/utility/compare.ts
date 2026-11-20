import { CssCompatibleUnits } from "../compatible";

import type { Dimension } from "./dimension";
import { toCanonical } from "./to-canonical";

/**
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
