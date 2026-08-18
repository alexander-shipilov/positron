import type { NumberLike } from "@positron/core";
import { isNumber, never } from "@positron/core";

import { debug } from "../../utils";

import type { RealNumber } from "./real-number";
import { isRealNumber } from "./is-real-number";

/**
 * The {@link Real} function creates a {@link RealNumber} number from the given
 * `NumberLike` value.
 *
 * @example
 * ```ts
 *  const real1 = Real(1.1)
 *  // 1.1
 *
 *  const real2 = Real('1e10')
 *  // 10_000_000_000
 *
 *  const real3 = Real(NaN)
 *  // RangeError
 *
 *  const real4 = Real(Infinity)
 *  // RangeError
 * ```
 *
 * @param numberLike - The `NumberLike` value to be converted to
 *   a {@link RealNumber}
 *
 * @throws RangeError if the passed `numberLike` is not a finite number.
 * @throws SyntaxError if the passed `numberLike` cannot be converted to
 *   a finite number.
 *
 * @public
 */
export const Real = (numberLike: NumberLike): RealNumber => {
  const number = 0 + (isNumber(numberLike) ? numberLike : Number(numberLike));

  return isRealNumber(number)
    ? number
    : never(
        isNumber(numberLike)
          ? new RangeError(
              `The ${debug(numberLike)} cannot be converted to a 'RealNumber' ` +
                `because it is not a finite number`,
            )
          : new SyntaxError(
              `Cannot convert ${debug(numberLike)} to a 'RealNumber'`,
            ),
      );
};
