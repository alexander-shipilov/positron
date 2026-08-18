import { isNegativeZero } from "../../utils";

import type { IntegerNumber } from "./integer-number";

/**
 * The {@link isIntegerNumber} function determines whether the passed
 * number `maybeIntegerNumber` is an {@Link IntegerNumber}.
 *
 * @param maybeIntegerNumber - The value to be checked.
 *
 * @public
 */
export function isIntegerNumber(
  maybeIntegerNumber: number,
): maybeIntegerNumber is IntegerNumber {
  return (
    Number.isSafeInteger(maybeIntegerNumber) &&
    !isNegativeZero(maybeIntegerNumber)
  );
}
