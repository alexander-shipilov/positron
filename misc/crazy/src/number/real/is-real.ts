import { isNumber } from "@positron/core";

import type { Real } from "./real";

/**
 * The {@link isReal} function determines whether the passed
 * `maybeRealNumber` is a {@Link Real} number.
 *
 * @param maybeRealNumber - The value to be checked.
 *
 * @public
 */
export function isReal(maybeRealNumber: unknown): maybeRealNumber is Real {
  return isNumber(maybeRealNumber) && isFinite(maybeRealNumber);
}
