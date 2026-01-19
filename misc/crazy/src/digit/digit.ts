import type { NumberLike } from "@positron/core";
import type { Nominal } from "@positron/nominal";
import { isNumber, never, typeOf } from "@positron/core";

import { IntegerNumber } from "../number/integer-number";

import type { DigitType } from "./digit-type";
import { isDigit } from "./is-digit";

/**
 * The {@link Digit} type represents a digit number:
 * an integer from the range [0, 9].
 *
 * @public
 */
export type Digit = Nominal<IntegerNumber, DigitType>;

/**
 * The {@link Digit} function creates an {@link Digit}
 * from the given {@link NumberLike} value.
 *
 * ```ts
 *  const digit1 = Digit(1)
 *  // 1
 *
 *  const digit3 = Digit('1e10')
 *  // RangeError
 *
 *  const digit3 = Digit(10)
 *  // RangeError
 * ```
 *
 * @param numberLike - The {@link NumberLike} value to be converted to
 *   a {@link Digit}
 *
 * @throws RangeError if the passed `numberLike` is not an integer from the
 *   range [0, 9].
 * @throws SyntaxError if the passed `numberLike` cannot be converted to
 *   an integer from range [0, 9].
 *
 * @public
 */
export const Digit = (numberLike: NumberLike): Digit => {
  const integer = IntegerNumber(numberLike);

  return isDigit(integer)
    ? integer
    : never(
        isNumber(numberLike)
          ? new RangeError(
              `The integer number ${numberLike} cannot be converted to ` +
                `a \`Digit\` because it is not in a range [0, 9]`,
            )
          : new SyntaxError(
              `Cannot convert ${typeOf(numberLike)} \`${numberLike}\` to ` +
                `a \`Digit\``,
            ),
      );
};
