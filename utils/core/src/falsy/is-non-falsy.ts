import type { NonFalsy } from "./non-falsy";
import { isFalsy } from "./is-falsy";

/**
 * The {@link isNonFalsy} function determines whether the passed
 * {@link maybeNonFalsy} is a {@link NonFalsy}.
 *
 * @param maybeNonFalsy - The value to be tested for being a
 *   {@link NonFalsy | non-falsy}.
 *
 * @returns The boolean value `true` if the given {@link maybeNonFalsy} is
 *   non-falsy value. Otherwise, `false`.
 *
 * @public
 */
export function isNonFalsy<TValue>(
  maybeNonFalsy: TValue,
): maybeNonFalsy is NonFalsy<TValue> {
  return !isFalsy(maybeNonFalsy);
}
