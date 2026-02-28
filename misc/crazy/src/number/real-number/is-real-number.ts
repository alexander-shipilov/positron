import { isNumber } from "@positron/core";

import type { RealNumber } from "./real-number";

/**
 * The {@link isRealNumber} function determines whether the passed
 * `maybeRealNumber` is a {@Link RealNumber} number.
 *
 * @param maybeRealNumber - The value to be checked.
 *
 * @public
 */
export function isRealNumber(
  maybeRealNumber: unknown,
): maybeRealNumber is RealNumber {
  return isNumber(maybeRealNumber) && isFinite(maybeRealNumber);
}
