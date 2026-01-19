import type { NumberLike } from "@positron/core";
import type { Nominal } from "@positron/nominal";
import { isNumber, never } from "@positron/core";

import { RealNumber } from "../real-number";

import type { IntegerNumberType } from "./integer-number-type";
import { isIntegerNumber } from "./is-integer-number";

/**
 * The {@link IntegerNumber} type represents an integer number.
 *
 * @public
 */
export type IntegerNumber = Nominal<RealNumber, IntegerNumberType>;

/**
 * The {@link IntegerNumber} function creates an {@link IntegerNumber}
 * from the given {@link NumberLike} value.
 *
 * ```ts
 *  const integer1 = Integer(1)
 *  // 1
 *
 *  const integer2 = Integer('1e10')
 *  // 10_000_000_000
 * ```
 *
 * @param numberLike - The {@link NumberLike} value to be converted to an
 *   {@link IntegerNumber}
 *
 * @throws RangeError if the passed `numberLike` is not a safe integer.
 * @throws SyntaxError if the passed `numberLike` cannot be converted to
 *   a safe integer.
 *
 * @public
 */
export const IntegerNumber = (numberLike: NumberLike): IntegerNumber => {
  const real = RealNumber(numberLike);

  return isIntegerNumber(real)
    ? real
    : never(
        isNumber(numberLike)
          ? new RangeError(
              `The real number ${numberLike} cannot be converted to ` +
                `an \`IntegerNumber\` because it is not a safe integer`,
            )
          : new SyntaxError(
              `Cannot convert \`${numberLike}\` to an \`IntegerNumber\``,
            ),
      );
};
