import { isIntegerNumber } from "../integer-number";

import type { NaturalNumber } from "./natural-number";

/**
 * The {@link isNaturalNumber} function determines whether the passed
 * `maybeNaturalNumber` is a {@Link NaturalNumber}.
 *
 * @param maybeNaturalNumber - The value to be checked.
 *
 * @public
 */
export function isNaturalNumber(
  maybeNaturalNumber: unknown,
): maybeNaturalNumber is NaturalNumber {
  return isIntegerNumber(maybeNaturalNumber) && maybeNaturalNumber > 0;
}
