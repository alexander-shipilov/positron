import { isIntegerNumber } from "../number/integer-number";

import type { Digit } from "./digit";

/**
 * The {@link isDigit} function determines whether the passed
 * `maybeDigit` is an {@Link Digit}.
 *
 * @param maybeDigit - The value to be checked.
 *
 * @public
 */
export function isDigit(maybeDigit: unknown): maybeDigit is Digit {
  return isIntegerNumber(maybeDigit) && maybeDigit >= 0 && maybeDigit <= 9;
}
