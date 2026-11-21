import { isNumber } from "../number/is-number";

import { isIndexNumber } from "./is-index-number";

/**
 * The {@link isIndex} type-guard function determines whether the passed
 * `maybeIndex` is a valid index of arrays, as well as of any other indexable
 * types (strings, etc.).
 *
 * @param maybeIndex - The value to be checked.
 *
 * @returns The boolean value `true` if the given `maybeIndex` is a valid index.
 *   Otherwise, `false`.
 *
 * @public
 */
export function isIndex(maybeIndex: unknown): maybeIndex is number {
  return isNumber(maybeIndex) && isIndexNumber(maybeIndex);
}
