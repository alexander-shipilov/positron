import {
  isBigintType,
  isBooleanType,
  isNullType,
  isNumberType,
  isStringType,
  isUndefinedType,
} from "@positron/core-types";

import type { StringLike } from "./string-like";

import { typeOf } from "../type-of";

/**
 * Function {@link isStringLike} checks if the passed {@link maybeStringLike}
 * is a {@link StringLike} value
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
