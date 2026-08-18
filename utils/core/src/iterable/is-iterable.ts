import { isFunction } from "../function";
import { hasOwnProperty } from "../property";

/**
 * Checks if the `passed` value is an `Iterable` object
 *
 * @param value - The value to be checked.
 *
 * @public
 */
export function isIterable(value: unknown): value is Iterable<unknown> {
  return (
    hasOwnProperty(value, Symbol.iterator) && isFunction(value[Symbol.iterator])
  );
}
