import type { NonOptional } from "./non-optional";

/**
 * The {@link isNonOptional} function determines whether the passed
 * `maybeNonOptional` is {@link NonOptional}
 *
 * @param maybeNonOptional - The value to be tested for being
 *   {@link NonOptional}.
 *
 * @returns The boolean value `true` if the given `maybeNonOptional` is
 *   {@link NonOptional}. Otherwise, `false`.
 *
 * @public
 */
export function isNonOptional<TValue>(
  maybeNonOptional: TValue,
): maybeNonOptional is NonOptional<TValue> {
  return maybeNonOptional !== undefined;
}
