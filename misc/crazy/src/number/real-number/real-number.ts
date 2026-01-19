import type { NumberLike } from "@positron/core";
import type { Nominal } from "@positron/nominal";
import { isNumber, never } from "@positron/core";
import { typeOf } from "@positron/core/src";

import type { RealNumberType } from "./real-number-type";
import { isRealNumber } from "./is-real-number";

/**
 * The {@link RealNumber} type represents a real number: any finite number.
 *
 * @public
 */
export type RealNumber = Nominal<number, RealNumberType>;

/**
 * The {@link RealNumber} function creates a {@link RealNumber} from the
 * given {@link NumberLike} value.
 *
 * ```ts
 *  const real1 = RealNumber(1.1)
 *  // 1.1
 *
 *  const real2 = RealNumber('1e10')
 *  // 10_000_000_000
 *
 *  const real3 = RealNumber(NaN)
 *  // RangeError
 *
 *  const real4 = RealNumber(Infinity)
 *  // RangeError
 * ```
 *
 * @param numberLike - The {@link NumberLike} value to be converted to
 *   a {@link RealNumber}
 *
 * @throws RangeError if the passed `numberLike` is a non-finite number.
 * @throws SyntaxError if the passed `numberLike` cannot be converted to
 *   a finite number.
 *
 * @public
 */
export const RealNumber = (numberLike: NumberLike): RealNumber => {
  const number: number = isNumber(numberLike) ? numberLike : Number(numberLike);

  return isRealNumber(number)
    ? number
    : never(
        isNumber(numberLike)
          ? new RangeError(
              `The number ${numberLike} cannot be converted to ` +
                `a 'RealNumber' because it is not a finite number`,
            )
          : new SyntaxError(
              `Cannot convert ${typeOf(numberLike)} ${numberLike} to ` +
                `a 'RealNumber'`,
            ),
      );
};
