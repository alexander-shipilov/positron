import type { KeyOf } from "../key/key-of";

import type { IndexKeyLike } from "./index-key-like";
import type { Indexed } from "./indexed";
import { isIndexKey } from "./is-index-key";

/**
 * The {@link isIndexKeyOf} type-guard function returns `true` if the specified
 * {@link Indexed} object has the passed `maybeIndexKeyOf` among its indices.
 *
 * @param maybeIndexKeyOf - The key to check.
 *
 * @param indexed - The indexed object to check index presence for.
 *
 * @returns The boolean value `true` if the given `maybeIndexKeyOf` is an index
 *   of `indexed`.
 *
 * @public
 */
export function isIndexKeyOf<TValue extends Indexed>(
  maybeIndexKeyOf: IndexKeyLike,
  indexed: TValue,
): maybeIndexKeyOf is KeyOf<TValue, number> {
  return (
    isIndexKey(maybeIndexKeyOf) && Number(maybeIndexKeyOf) < indexed.length
  );
}
