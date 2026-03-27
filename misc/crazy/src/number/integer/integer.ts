import type { NumberLike } from "@positron/core";
import type { Nominal } from "@positron/nominal";
import { isNumber, never } from "@positron/core";

import { debug } from "../../utils";
import { Real } from "../real";

import type { IntegerType } from "./integer-type";
import { isInteger } from "./is-integer";

/**
 * The {@link Integer} type represents an integer number.
 *
 * @public
 */
export type Integer = Nominal<Real, IntegerType>;

/**
 * The {@link Integer} function creates an {@link Integer}
 * from the given {@link NumberLike} value.
 *
 * ```ts
 *  const integer1 = integer(1)
 *  // 1
 *
 *  const integer2 = integer('1e10')
 *  // 10_000_000_000
 *
 *   const integer3 = integer(1.1)
 *  // RangeError
 *
 *  const integer4 = integer('a')
 *  // SyntaxError
 * ```
 *
 * @param numberLike - The {@link NumberLike} value to be converted to an
 *   {@link Integer}
 *
 * @throws RangeError if the passed `numberLike` is not a safe integer.
 * @throws SyntaxError if the passed `numberLike` cannot be converted to
 *   a safe integer.
 *
 * @public
 */
export function Integer(numberLike: NumberLike): Integer {
  const real = Real(numberLike);

  return isInteger(real)
    ? real
    : never(
        isNumber(numberLike)
          ? new RangeError(
              `The ${debug(numberLike)} cannot be converted to an 'Integer' ` +
                `because it is not a safe integer`,
            )
          : new SyntaxError(
              `Cannot convert ${debug(numberLike)} to an 'Integer'`,
            ),
      );
}
