import { isIterator } from "../iterator/is-iterator";

import { isIterable } from "./is-iterable";

/**
 * The {@link isIterableIterator} type-guard function determines whether the
 * passed `maybeIterableIterator` is an `IterableIterator`.
 *
 * @param maybeIterableIterator - The value to be checked.
 *
 * @returns The boolean value `true` if `maybeIterableIterator` is an
 *   `IterableIterator` object; otherwise, `false`.
 *
 * @public
 */
export function isIterableIterator(
  maybeIterableIterator: unknown,
): maybeIterableIterator is IterableIterator<unknown> {
  return isIterable(maybeIterableIterator) && isIterator(maybeIterableIterator);
}
