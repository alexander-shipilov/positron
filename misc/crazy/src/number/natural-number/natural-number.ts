import type { NumberLike } from "@positron/core";
import type { Nominal, NominalType } from "@positron/nominal";
import { isNumber, never, typeOf } from "@positron/core";

import { IntegerNumber } from "../integer-number";

import { isNaturalNumber } from "./is-natural-number";

/**
 * @internal
 */
declare const NaturalNumberType: unique symbol;

/**
 * @internal
 */
type NaturalNumberType = NominalType<typeof NaturalNumberType, "IntegerNumber">;

/**
 * The {@link NaturalNumber} type represents an integer number.
 *
 * @public
 */
export type NaturalNumber = Nominal<IntegerNumber, NaturalNumberType>;

/**
 * The {@link NaturalNumber} function creates an {@link NaturalNumber}
 * from the given {@link NumberLike} value.
 *
 * ```ts
 *  assert((value) => value === 1, NaturalNumber(1))
 *  // 1
 *
 *  const natural2 = NaturalNumber('1e10')
 *  // 10_000_000_000
 *
 *   const natural2 = NaturalNumber(0)
 *  // RangeError
 * ```
 *
 * @param numberLike - The {@link NumberLike} value to be converted to
 *   a {@link NaturalNumber}
 *
 * @throws RangeError if the passed `numberLike` is not a safe integer.
 * @throws SyntaxError if the passed `numberLike` cannot be converted to
 *   a safe integer.
 *
 * @public
 */
export const NaturalNumber = (numberLike: NumberLike): NaturalNumber => {
  const integer = IntegerNumber(numberLike);

  return isNaturalNumber(integer)
    ? integer
    : never(
        isNumber(numberLike)
          ? new RangeError(
              `The integer number ${numberLike} cannot be converted to ` +
                `a \`NaturalNumber\` because it is not a safe integer`,
            )
          : new SyntaxError(
              `Cannot convert ${typeOf(numberLike)} \`${numberLike}\` to ` +
                `a \`NaturalNumber\``,
            ),
      );
};
