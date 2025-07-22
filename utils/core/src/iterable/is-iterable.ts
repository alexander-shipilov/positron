import { isFunction } from "../index";
import { isPropertyOf } from "../property";

/**
 * Checks if the `passed` value is an {@link Iterable} object
 *
 * @param value - The value to be checked.
 */
export function isIterable(value: unknown): value is Iterable<unknown> {
  return (
    isPropertyOf(Symbol.iterator, value) && isFunction(value[Symbol.iterator])
  );
}
