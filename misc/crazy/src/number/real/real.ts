import type { NumericLike } from "@positron/lang";
import { isNumber, never } from "@positron/lang";

import { debug } from "../../utils";

import type { RealNumber } from "./real-number";
import { isRealNumber } from "./is-real-number";

/**
 * The {@link Real} function creates a {@link RealNumber} number from the given
 * `NumberLike` value.
 *
 * @param numberLike - The `NumberLike` value to be converted to
 *   a {@link RealNumber}
 *
 * @throws RangeError if the passed `numberLike` is not a finite number.
 *
 * @throws SyntaxError if the passed `numberLike` cannot be converted to
 *   a finite number.
 *
 * @public
 */
export const Real = (numberLike: NumericLike): RealNumber => {
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
