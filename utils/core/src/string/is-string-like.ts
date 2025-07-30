import { isBigintType } from "../bigint-type";
import { isBooleanType } from "../boolean-type";
import { isNullType } from "../null-type";
import { isNumberType } from "../number-type";
import { isStringType } from "../string-type";
import { typeOf } from "../type-of";
import { isUndefinedType } from "../undefined-type";

import type { StringLike } from "./string-like";

/**
 * The {@link isStringLike} function checks if the passed {@link
 * maybeStringLike} is a {@link StringLike} value
 *
 * @param maybeStringLike - The value to be checked.
 *
 * @public
 */
export function isStringLike(
  maybeStringLike: unknown,
): maybeStringLike is StringLike {
  const type = typeOf(maybeStringLike);

  return (
    isBigintType(type) ||
    isBooleanType(type) ||
    isNullType(type) ||
    isNumberType(type) ||
    isStringType(type) ||
    isUndefinedType(type)
  );
}
