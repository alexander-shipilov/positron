import { toNumber } from "../number/to-number";
import { toString } from "../string/to-string";

import type { IndexKeyLike } from "./index-key-like";
import { isIndexKeyLike } from "./is-index-key-like";
import { isIndexNumber } from "./is-index-number";

/**
 * The {@link isIndexKey} function determines whether the passed `maybeIndexKey`
 * is the valid index key of arrays, as well as of any other
 * indexable types (strings, etc.).
 *
 * @param maybeIndexKey - The value to be checked.
 *
 * @returns The boolean value `true` if the given `maybeIndexKey` is an
 *   {@link IndexKeyLike}. Otherwise, `false`.
 *
 * @public
 */
export function isIndexKey(
  maybeIndexKey: PropertyKey,
): maybeIndexKey is IndexKeyLike {
  if (isIndexKeyLike(maybeIndexKey)) {
    const maybeIndexNumber = toNumber(maybeIndexKey);

    return (
      isIndexNumber(maybeIndexNumber) &&
      toString(maybeIndexNumber) === toString(maybeIndexKey)
    );
  }

  return false;
}
