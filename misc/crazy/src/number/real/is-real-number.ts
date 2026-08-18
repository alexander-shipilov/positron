import { isNegativeZero } from "../../utils";

import type { RealNumber } from "./real-number";

/**
 * The {@link isRealNumber} function determines whether the passed number
 * `maybeRealNumber` is a {@Link RealNumber}.
 *
 * @param maybeRealNumber - The value to be checked.
 *
 * @public
 */
export function isRealNumber(
  maybeRealNumber: number,
): maybeRealNumber is RealNumber {
  return isFinite(maybeRealNumber) && !isNegativeZero(maybeRealNumber);
}
