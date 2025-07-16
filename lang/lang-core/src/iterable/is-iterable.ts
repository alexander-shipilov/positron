import { isFunction } from "../index";
import { hasProperty } from "../property";

/**
 * Checks if the `passed` value is an {@link Iterable} object
 *
 * @param value - The value to be checked.
 */
export function isIterable(value: unknown): value is Iterable<unknown> {
  return (
    hasProperty(value, Symbol.iterator) && isFunction(value[Symbol.iterator])
  );
}
