import { isFunction } from "../function";
import { isPropertyOwner } from "../property";

/**
 * Checks if the `passed` value is an {@link Iterable} object
 *
 * @param value - The value to be checked.
 */
export function isIterable(value: unknown): value is Iterable<unknown> {
  return (
    isPropertyOwner(value, Symbol.iterator) &&
    isFunction(value[Symbol.iterator])
  );
}
