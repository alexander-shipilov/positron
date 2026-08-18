import type { NumberLike } from "@positron/core";
import { isBigint, isNumber, never } from "@positron/core";

import { debug } from "../../utils";

import type { B512Int } from "./b512-int";
import { isB512Int } from "./is-b512-int";

/**
 * The {@link B512} function creates an
 * {@link B512Int} from the given `NumberLike` value.
 *
 * @example
 * ```ts
 *  const integer1 = B512(1)
 *  // 1n
 *
 *  const integer2 = B512('1e10')
 *  // 10_000_000_000n
 *
 *   const integer3 = B512(1.1)
 *  // RangeError
 *
 *  const integer4 = B512('a')
 *  // SyntaxError
 * ```
 *
 * @param numberLike - The `NumberLike` value to be converted to an
 *   {@link B512Int}
 *
 * @throws RangeError if the passed `numberLike` is not a 512 bits integer.
 * @throws SyntaxError if the passed `numberLike` cannot be converted to
 *   a 512 bits integer.
 *
 * @public
 */
export const B512 = (numberLike: NumberLike): B512Int => {
  const bigint = isBigint(numberLike) ? numberLike : BigInt(numberLike);

  return isB512Int(bigint)
    ? bigint
    : never(
        isNumber(numberLike) || isBigint(numberLike)
          ? new RangeError(
              `The ${debug(numberLike)} cannot be converted to an 'B512Int' ` +
                `because it is not a 512 bits bigint`,
            )
          : new SyntaxError(
              `Cannot convert ${debug(numberLike)} to an 'B512Int'`,
            ),
      );
};
