import { isFunction } from "../function/is-function";
import { hasKey } from "../key/has-key";

/**
 * The {@link isIterator} type-guard function determines whether the passed
 * `maybeIterator` is an `Iterator` object.
 *
 * @remarks
 *   The {@link isIterator} function:
 *
 *   - checks for the presence of the `next` property (not necessarily own),
 *     which must be a function;
 *
 *   - does not check the `next` function return value (that should be
 *     `IteratorResult`) because calling `next()` changes the iterator state;
 *
 *   - does not check the presence of the `return` and `throw` properties
 *     because both of them are optional and may be omitted.
 *
 * @param maybeIterator - The value to be checked.
 *
 * @returns The boolean value `true` if `maybeIterator` has a `next` property
 *   that is a function; otherwise, `false`.
 *
 * @public
 */
export function isIterator(
  maybeIterator: unknown,
): maybeIterator is Iterator<unknown> {
  return hasKey(maybeIterator, "next") && isFunction(maybeIterator.next);
}
