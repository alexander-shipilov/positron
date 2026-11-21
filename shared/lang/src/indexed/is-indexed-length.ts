import { isIntegerNumber } from "../number/is-integer-number";

import { MAX_INDEXED_LENGTH } from "./max-indexed-length";

/**
 * The {@link isIndexedLength} type-guard function determines whether the
 * passed `maybeLength` is a valid length of arrays, as well as of any other
 * indexable types (strings, maps, etc.).
 *
 * @param maybeLength - The value to be checked.
 *
 * @returns The boolean value `true` if `maybeLength` is a valid indexed
 *   length; otherwise, `false`.
 *
 * @public
 */
export function isIndexedLength(maybeLength: unknown): maybeLength is number {
  return (
    isIntegerNumber(maybeLength) &&
    maybeLength >= 0 &&
    maybeLength <= MAX_INDEXED_LENGTH
  );
}
