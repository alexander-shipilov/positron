import { isFunction } from "../function/is-function";
import { hasKey } from "../key/has-key";

/**
 * The {@link isIterable} type-guard function determines whether the passed
 * `maybeIterable` is an `Iterable` object.
 *
 * @param maybeIterable - The value to be checked.
 *
 * @returns The boolean value `true` if the `maybeIterable` is an `Iterable`
 *   object.
 *
 * @public
 */
export function isIterable(
  maybeIterable: unknown,
): maybeIterable is Iterable<unknown> {
  return (
    hasKey(maybeIterable, Symbol.iterator) &&
    isFunction(maybeIterable[Symbol.iterator])
  );
}
