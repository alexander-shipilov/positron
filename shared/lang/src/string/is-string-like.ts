import { Type } from "../type/type";
import { typeOf } from "../type/type-of";

import type { StringLike } from "./string-like";

/**
 * The {@link isStringLike} function determines whether the passed
 * `maybeStringLike` is a {@link StringLike} value.
 *
 * @param maybeStringLike - The value to be checked.
 *
 * @public
 */
export function isStringLike(
  maybeStringLike: unknown,
): maybeStringLike is StringLike {
  const maybeStringLikeType = typeOf(maybeStringLike);

  return (
    maybeStringLikeType === Type.Bigint ||
    maybeStringLikeType === Type.Boolean ||
    maybeStringLikeType === Type.Null ||
    maybeStringLikeType === Type.Number ||
    maybeStringLikeType === Type.String ||
    maybeStringLikeType === Type.Undefined
  );
}
