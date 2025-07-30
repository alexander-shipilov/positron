import { isFunction } from "../index";
import { isPropertyOf } from "../property";

/**
 * Predicate function {@link isIterator} checks if the passed `value` is
 * an {@link Iterator} object.
 *
 * @remarks
 * The {@link isIterator} function:
 *  - checks for the presence of the `next` property (not necessarily own)
 *    which should be a function
 *  - does not check `next` function return value (that should be
 *    {@link IteratorResult}) because calling of the `next()` changes
 *    the iterator internal state
 *  - does not check the presence of the `return` and `throw` properties
 *    because both of them are optional and could be omitted
 *
 * @param value - Value
 *
 * @returns `true` if the `value` has property `next` which is a function.
 */
export function isIterator(value: unknown): value is Iterator<unknown> {
  return isPropertyOf("next", value) && isFunction(value.next);
}
