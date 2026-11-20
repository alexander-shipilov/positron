import { hasKey } from "../key/has-key";

import type { Indexed } from "./indexed";
import { isIndexedLength } from "./is-indexed-length";

/**
 * The {@link isIndexed} type-guard function determines whether the passed
 * `maybeIndexable` is an {@link Indexed}.
 *
 * @param maybeIndexable - Value to check.
 *
 * @returns The boolean value `true` if the given `maybeIndexable` is an
 *   {@link Indexed}. Otherwise, `false`.
 *
 * @public
 */
export function isIndexed(maybeIndexable: unknown): maybeIndexable is Indexed {
  return (
    hasKey(maybeIndexable, "length") && isIndexedLength(maybeIndexable.length)
  );
}
