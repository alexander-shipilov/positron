import { Type } from "../type/type";
import { typeOf } from "../type/type-of";

import type { NumericLike } from "./numeric-like";

/**
 * The {@link isNumericLike} function determines whether the passed
 * `maybeNumericLike` is a {@link NumericLike}.
 *
 * @param maybeNumericLike - The value to be tested for being a
 *   {@link NumericLike}.
 *
 * @returns The boolean value `true` if the given `maybeNumericLike` is a
 *   {@link NumericLike}. Otherwise, `false`.
 *
 * @public
 */
export function isNumericLike(
  maybeNumericLike: unknown,
): maybeNumericLike is NumericLike {
  const maybeNumericLikeType = typeOf(maybeNumericLike);

  return (
    maybeNumericLikeType === Type.Boolean ||
    maybeNumericLikeType === Type.Bigint ||
    maybeNumericLikeType === Type.Number ||
    maybeNumericLikeType === Type.String
  );
}
