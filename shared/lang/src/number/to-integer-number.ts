import type { NumericLike } from "../numeric/numeric-like";
import { assertType } from "../assert/assert-type";
import { error } from "../error/error";
import { debug } from "../utility/debug";
import { template } from "../utility/template";

import { isIntegerNumber } from "./is-integer-number";
import { isNumber } from "./is-number";
import { toFiniteNumber } from "./to-finite-number";

/**
 * The {@link toIntegerNumber} function converts the passed {@link NumericLike}
 * `numericLike` to an integer number.
 *
 * @example
 * ```ts
 * import { toIntegerNumber } from "@positron/lang";
 *
 * const integer1 = toIntegerNumber(1);
 * // 1
 *
 * const integer2 = toIntegerNumber("1e10");
 * // 10_000_000_000
 *
 * const integer3 = toIntegerNumber(1.1);
 * // throws RangeError
 *
 * const integer4 = toIntegerNumber(Infinity);
 * // throws RangeError
 * ```
 *
 * @param numericLike - The {@link NumericLike} value to be converted to an
 *   integer number.
 *
 * @returns The converted integer number.
 *
 * @throws `RangeError` If the passed `numericLike` is a number that is not an
 *   integer.
 *
 * @throws `SyntaxError` If the passed `numericLike` cannot be converted to an
 *   integer number.
 *
 * @public
 */
export function toIntegerNumber(numericLike: NumericLike): number {
  const number = toFiniteNumber(numericLike);

  return assertType(number, isIntegerNumber, () =>
    isNumber(numericLike)
      ? error(
          template`The number ${0} is not an integer`(debug(numericLike)),
          RangeError,
        )
      : error(
          template`Cannot convert ${0} to an integer number`(
            debug(numericLike),
          ),
          SyntaxError,
        ),
  );
}
