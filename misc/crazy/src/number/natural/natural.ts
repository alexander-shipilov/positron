import type { NumberLike } from "@positron/core";
import { isNumber, never } from "@positron/core";

import { debug } from "../../utils";
import { Integer } from "../integer";

import type { NaturalNumber } from "./natural-number";
import { isNaturalNumber } from "./is-natural-number";

/**
 * The {@link Natural} function creates a {@link NaturalNumber}
 * from the given `NumberLike` value.
 *
 * ```ts
 *  const natural1 = Natural(1)
 *  // 1
 *
 *  const natural3 = Natural('1e20')
 *  // SyntaxError
 *
 *  const natural3 = Natural(-1)
 *  // RangeError
 * ```
 *
 * @param numberLike - The `NumberLike` value to be converted to a
 *   {@link NaturalNumber}
 *
 * @throws RangeError if the passed `numberLike` is not a non-negative safe
 *   integer.
 * @throws SyntaxError if the passed `numberLike` cannot be converted to
 *   a non-negative safe integer.
 *
 * @public
 */
export const Natural = (numberLike: NumberLike): NaturalNumber => {
  const integer = Integer(numberLike);

  return isNaturalNumber(integer)
    ? integer
    : never(
        isNumber(numberLike)
          ? new RangeError(
              `The ${debug(numberLike)} cannot be converted to a 'NaturalNumber' ` +
                `because it is not a non-negative safe integer`,
            )
          : new SyntaxError(
              `Cannot convert ${debug(numberLike)} to a 'NaturalNumber'`,
            ),
      );
};
