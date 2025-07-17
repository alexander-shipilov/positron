import type { NonNullish } from "./non-nullish";

/**
 * The {@link isNonNullish} function determines if the passed
 * {@link maybeNonNullish} is {@link NonNullish}
 *
 * @param maybeNonNullish - Any value
 *
 * @public
 */
export function isNonNullish<TValue>(
  maybeNonNullish: TValue,
): maybeNonNullish is NonNullish<TValue> {
  return maybeNonNullish !== null;
}
