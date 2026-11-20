import type { NumericLike } from "../numeric/numeric-like";
import { assertType } from "../assert/assert-type";
import { error } from "../error/error";
import { debug } from "../utility/debug";
import { template } from "../utility/template";

import { isNumber } from "./is-number";
import { isSafeIntegerNumber } from "./is-safe-integer-number";
import { toFiniteNumber } from "./to-finite-number";

/**
 * The {@link toSafeIntegerNumber} function converts the passed
 * {@link NumericLike} `numericLike` to a safe integer number.
 *
 * @example
 * ```ts
 *  const integer1 = toSafeIntegerNumber(1)
 *  // 1
 *
 *  const integer2 = toSafeIntegerNumber('1e10')
 *  // 10_000_000_000
 *
 *  const integer3 = toSafeIntegerNumber(1.1)
 *  // RangeError
 *
 *  const integer4 = toSafeIntegerNumber(2 ** 53)
 *  // RangeError
 * ```
 *
 * @param numericLike - The {@link NumericLike} value to be converted to a safe
 *   integer number.
 *
 * @throws RangeError if the passed `numericLike` is a number that is not a
 *   safe integer.
 *
 * @throws SyntaxError if the passed `numericLike` cannot be converted to
 *   a safe integer number.
 *
 * @public
 */
export function toSafeIntegerNumber(numericLike: NumericLike): number {
  const number = toFiniteNumber(numericLike);

  return assertType(number, isSafeIntegerNumber, () =>
    isNumber(numericLike)
      ? error(
          template`The number ${0} is not a safe integer`(debug(numericLike)),
          RangeError,
        )
      : error(
          template`Cannot convert ${0} to a safe integer number`(
            debug(numericLike),
          ),
          SyntaxError,
        ),
  );
}
