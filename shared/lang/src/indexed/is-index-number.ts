import { isSafeIntegerNumber } from "../number/is-safe-integer-number";

import { MAX_INDEXED_LENGTH } from "./max-indexed-length";

/**
 * The {@link isIndexNumber} function determines whether the passed number
 * `maybeIndexNumber` is a valid index of arrays, as well as of any other
 * indexable types (strings, etc.).
 *
 * @param maybeIndexNumber - The value to be checked.
 *
 * @returns The boolean value `true` if `maybeIndexNumber` is a valid index
 *   number; otherwise, `false`.
 *
 * @public
 */
export function isIndexNumber(maybeIndexNumber: number): boolean {
  return (
    isSafeIntegerNumber(maybeIndexNumber) &&
    maybeIndexNumber >= 0 &&
    maybeIndexNumber < MAX_INDEXED_LENGTH
  );
}
