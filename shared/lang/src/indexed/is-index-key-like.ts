import { Type } from "../type/type";
import { typeOf } from "../type/type-of";

import type { IndexKeyLike } from "./index-key-like";

/**
 * The {@link isIndexKeyLike} function determines whether the passed
 * `maybeIndexKeyLike` is an {@link IndexKeyLike}.
 *
 * @param maybeIndexKeyLike - The value to be checked.
 *
 * @returns The boolean value `true` if the given `maybeIndexKeyLike` is an
 *   {@link IndexKeyLike}. Otherwise, `false`.
 *
 * @public
 */
export function isIndexKeyLike(
  maybeIndexKeyLike: unknown,
): maybeIndexKeyLike is IndexKeyLike {
  const maybeIndexLikeType = typeOf(maybeIndexKeyLike);

  return (
    maybeIndexLikeType === Type.Number || //
    maybeIndexLikeType === Type.String
  );
}
