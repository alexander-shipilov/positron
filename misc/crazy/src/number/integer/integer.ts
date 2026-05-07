import type { NumberLike } from "@positron/core";
import { isNumber, never } from "@positron/core";

import { debug } from "../../utils";
import { Real } from "../real";

import type { IntegerNumber } from "./integer-number";
import { isIntegerNumber } from "./is-integer-number";

/**
 * The {@link Integer} function creates an
 * {@link IntegerNumber} from the given `NumberLike` value.
 *
 * ```ts
 *  const integer1 = Integer(1)
 *  // 1
 *
 *  const integer2 = Integer('1e10')
 *  // 10_000_000_000
 *
 *   const integer3 = Integer(1.1)
 *  // RangeError
 *
 *  const integer4 = Integer('a')
 *  // SyntaxError
 * ```
 *
 * @param numberLike - The `NumberLike` value to be converted to a
 *   {@link IntegerNumber}
 *
 * @throws RangeError if the passed `numberLike` is not a safe integer.
 * @throws SyntaxError if the passed `numberLike` cannot be converted to
 *   a safe integer.
 *
 * @public
 */
export const Integer = (numberLike: NumberLike): IntegerNumber => {
  const real = Real(numberLike);

  return isIntegerNumber(real)
    ? real
    : never(
        isNumber(numberLike)
          ? new RangeError(
              `The ${debug(numberLike)} cannot be converted to an 'IntegerNumber' ` +
                `because it is not a safe integer`,
            )
          : new SyntaxError(
              `Cannot convert ${debug(numberLike)} to an 'IntegerNumber'`,
            ),
      );
};
