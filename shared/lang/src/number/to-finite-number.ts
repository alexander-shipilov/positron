import type { NumericLike } from "../numeric/numeric-like";
import { assertType } from "../assert/assert-type";
import { error } from "../error/error";
import { debug } from "../utility/debug";
import { template } from "../utility/template";

import { isFiniteNumber } from "./is-finite-number";
import { isNumber } from "./is-number";
import { toNumber } from "./to-number";

/**
 * The {@link toFiniteNumber} function converts the passed {@link NumericLike}
 * `numericLike` to a finite number.
 *
 * @example
 * ```ts
 * import { toFiniteNumber } from "@positron/lang";
 *
 * const finite1 = toFiniteNumber(1.1);
 * // 1.1
 *
 * const finite2 = toFiniteNumber("1e10");
 * // 10_000_000_000
 *
 * const finite3 = toFiniteNumber(NaN);
 * // throws RangeError
 *
 * const finite4 = toFiniteNumber(Infinity);
 * // throws RangeError
 * ```
 *
 * @param numericLike - The {@link NumericLike} value to be converted to a
 *   finite number.
 *
 * @returns The converted finite number.
 *
 * @throws `RangeError` If the passed `numericLike` is a number that is not a
 *   finite number.
 *
 * @throws `SyntaxError` If the passed `numericLike` cannot be converted to a
 *   finite number.
 *
 * @public
 */
export function toFiniteNumber(numericLike: NumericLike): number {
  // noinspection PointlessArithmeticExpressionJS
  const number = 0 + toNumber(numericLike); // convert -0 to 0

  return assertType(number, isFiniteNumber, () =>
    isNumber(numericLike)
      ? error(
          template`The number ${0} is not a finite number`(debug(numericLike)),
          RangeError,
        )
      : error(
          template`Cannot convert ${0} to a finite number`(debug(numericLike)),
          SyntaxError,
        ),
  );
}
