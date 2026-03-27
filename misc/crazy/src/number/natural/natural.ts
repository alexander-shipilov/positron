import type { NumberLike } from "@positron/core";
import type { Nominal } from "@positron/nominal";
import { isNumber, never } from "@positron/core";

import { debug } from "../../utils";
import { Integer } from "../integer";

import type { NaturalType } from "./natural-type";
import { isNatural } from "./is-natural";

/**
 * The {@link Natural} type represents a natural number:
 * an integer from the range [0, 9].
 *
 * @public
 */
export type Natural = Nominal<Integer, NaturalType>;

/**
 * The {@link natural} function creates a {@link Natural} from the given
 * {@link NumberLike} value.
 *
 * ```ts
 *  const natural1 = natural(1)
 *  // 1
 *
 *  const natural3 = natural('1e20')
 *  // SyntaxError
 *
 *  const natural3 = natural(-1)
 *  // RangeError
 * ```
 *
 * @param numberLike - The {@link NumberLike} value to be converted to
 *   a {@link Natural}
 *
 * @throws RangeError if the passed `numberLike` is not a non-negative safe
 *   integer.
 * @throws SyntaxError if the passed `numberLike` cannot be converted to
 *   a non-negative safe integer.
 *
 * @public
 */
export const natural = (numberLike: NumberLike): Natural => {
  const integer = Integer(numberLike);

  return isNatural(integer)
    ? integer
    : never(
        isNumber(numberLike)
          ? new RangeError(
              `The ${debug(numberLike)} cannot be converted to a 'Natural' ` +
                `because it is not a non-negative safe integer`,
            )
          : new SyntaxError(
              `Cannot convert ${debug(numberLike)} to a 'Natural'`,
            ),
      );
};
