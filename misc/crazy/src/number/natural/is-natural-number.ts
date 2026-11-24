import { isIntegerNumber } from "../integer";

import type { NaturalNumber } from "./natural-number";

/**
 * The {@link isNaturalNumber} function determines whether the passed number
 * `maybeNaturalNumber` is an {@link NaturalNumber}.
 *
 * @param maybeNaturalNumber - The value to be checked.
 *
 * @public
 */
export function isNaturalNumber(
  maybeNaturalNumber: number,
): maybeNaturalNumber is NaturalNumber {
  return isIntegerNumber(maybeNaturalNumber) && maybeNaturalNumber >= 0;
}
