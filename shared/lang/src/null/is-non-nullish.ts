import type { NonNullish } from "./non-nullish";

/**
 * The {@link isNonNullish} function determines whether the passed
 * `maybeNonNullish` is a {@link NonNullish}.
 *
 * @param maybeNonNullish - The value to be tested for being a non-nullish.
 *
 * @returns The boolean value `true` if the given `maybeNonNullish` is not
 *   `null`. Otherwise, `false`.
 *
 * @public
 */
export function isNonNullish<TValue>(
  maybeNonNullish: TValue,
): maybeNonNullish is NonNullish<TValue> {
  return maybeNonNullish !== null;
}
