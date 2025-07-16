import type { NumberLike } from "@positron/lang";
import { assert, isNumber } from "@positron/lang";

import type { SafeInt } from "./SafeInt";

import { isSafeInt } from "./isSafeInt";

/**
 * Converts the passed value to {@link SafeInt}
 *
 * @param value - The value to be converted to a {@link SafeInt} value. It may
 *   be a `string`, an `integer`, a `boolean`, or another {@link SafeInt}.
 * @returns A `safeint` value. Number values must be integers and are converted
 *   to {@link safeint | safeints}. The boolean value `true` becomes `1`, and
 *   `false` becomes `0`. Strings are parsed as if they are source text for
 *   integer literals, which means they can have leading and trailing
 *   whitespaces and can be prefixed with `0b`, `0o`, or `0x`.
 *
 * @throws RangeError Thrown if the parameter is a non-integral `number`.
 * @throws SyntaxError Thrown in one of the following cases:
 *  - The parameter is not a `number` and cannot be converted to a `number`.
 *  - After conversion to a `number`, the result is a non-integral `number`.
 */
export function toSafeInt(value: NumberLike): SafeInt {
  const number = isNumber(value) ? value : Number(value);

  if (isSafeInt(number)) {
    // -0 value fix
    return number || (0 as SafeInt);
  }

  assert(
    isNumber(value),
    () =>
      new RangeError(
        `The \`${typeof value}\` \`${value}\` cannot be converted to a \`smallint\` ` +
          `because it is not a safe integer`,
      ),
  );

  throw new SyntaxError(
    `Cannot convert \`${typeof value}\` \`${value}\` to a \`smallint\``,
  );
}
