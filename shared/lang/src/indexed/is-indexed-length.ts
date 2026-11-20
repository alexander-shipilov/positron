import { isIntegerNumber } from "../number/is-integer-number";

import { MAX_INDEXED_LENGTH } from "./max-indexed-length";

/**
 * The {@link isIndexedLength} function determines whether the passed
 * `maybeLength` is the valid length of arrays, as well as of any other
 * indexable types (strings, maps, etc.).
 *
 * @param maybeLength - The value to be checking.
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
