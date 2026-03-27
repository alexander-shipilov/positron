import type { NumberLike } from "@positron/core";
import type { Nominal } from "@positron/nominal";
import { isNumber, never } from "@positron/core";

import { debug } from "../../utils";

import type { RealType } from "./real-type";
import { isReal } from "./is-real";

/**
 * The {@link Real} type represents a real number: any finite number.
 *
 * @public
 */
export type Real = Nominal<number, RealType>;

/**
 * The {@link Real} function creates a {@link Real} number from the
 * given {@link NumberLike} value.
 *
 * ```ts
 *  const real1 = real(1.1)
 *  // 1.1
 *
 *  const real2 = real('1e10')
 *  // 10_000_000_000
 *
 *  const real3 = real(NaN)
 *  // RangeError
 *
 *  const real4 = real(Infinity)
 *  // RangeError
 * ```
 *
 * @param numberLike - The {@link NumberLike} value to be converted to
 *   a {@link Real}
 *
 * @throws RangeError if the passed `numberLike` is not a finite number.
 * @throws SyntaxError if the passed `numberLike` cannot be converted to
 *   a finite number.
 *
 * @public
 */
export const Real = (numberLike: NumberLike): Real => {
  const number = isNumber(numberLike) ? numberLike : Number(numberLike);

  return isReal(number)
    ? number
    : never(
        isNumber(numberLike)
          ? new RangeError(
              `The ${debug(numberLike)} cannot be converted to a 'Real' ` +
                `because it is not a finite number`,
            )
          : new SyntaxError(`Cannot convert ${debug(numberLike)} to a 'Real'`),
      );
};
