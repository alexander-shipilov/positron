import type { NonFalsy } from "./non-falsy";
import { isFalsy } from "./is-falsy";

/**
 * The {@link isNonFalsy} type-guard function determines whether the passed
 * `maybeNonFalsy` is a {@link NonFalsy} value.
 *
 * @param maybeNonFalsy - The value to be tested for being a {@link NonFalsy}.
 *
 * @returns The boolean value `true` if the given `maybeNonFalsy` is a
 *   non-falsy value. Otherwise, `false`.
 *
 * @public
 */
export function isNonFalsy<TValue>(
  maybeNonFalsy: TValue,
): maybeNonFalsy is NonFalsy<TValue> {
  return !isFalsy(maybeNonFalsy);
}
