import { isIterable } from "./is-iterable";
import { isIterator } from "./is-iterator";

/**
 * Checks if the `passed` value is an {@link IterableIterator}
 *
 * @param value - The value to be checked.
 */
export function isIterableIIterator(
  value: unknown,
): value is IterableIterator<unknown> {
  return isIterable(value) && isIterator(value);
}
