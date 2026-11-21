import { hasKey } from "../key/has-key";
import { isNumber } from "../number/is-number";

/**
 * The {@link isArrayLike} type-guard function determines whether the passed
 * `maybeArrayLike` is an `ArrayLike` object.
 *
 * @param maybeArrayLike - The value to check.
 *
 * @returns The boolean value `true` if `maybeArrayLike` has a numeric `length`
 *   property; otherwise, `false`.
 *
 * @public
 */
export function isArrayLike(
  maybeArrayLike: unknown,
): maybeArrayLike is ArrayLike<unknown> {
  return hasKey(maybeArrayLike, "length") && isNumber(maybeArrayLike.length);
}
