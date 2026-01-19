import type { IntegerNumber } from "./integer-number";

/**
 * The {@link isIntegerNumber} function determines whether the passed value is
 * an {@Link IntegerNumber}.
 *
 * @param maybeInteger - The value to be checked.
 *
 * @public
 */
export function isIntegerNumber(
  maybeInteger: unknown,
): maybeInteger is IntegerNumber {
  return Number.isSafeInteger(maybeInteger);
}
