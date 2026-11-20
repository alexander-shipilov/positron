import { isIterator } from "../iterator/is-iterator";

import { isIterable } from "./is-iterable";

/**
 * The {@link isIterableIterator} type-guard  function determines the passed
 * `maybeIterableIterator` is an `IterableIterator`.
 *
 * @param maybeIterableIterator - The value to be checked.
 *
 * @returns The boolean value `true` if the `maybeIterableIterator` is an
 *   `IterableIterator` object.
 *
 * @public
 */
export function isIterableIterator(
  maybeIterableIterator: unknown,
): maybeIterableIterator is IterableIterator<unknown> {
  return isIterable(maybeIterableIterator) && isIterator(maybeIterableIterator);
}
