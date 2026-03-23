import type { Integer } from "./integer";

/**
 * The {@link isInteger} function determines whether the passed value is
 * an {@Link Integer}.
 *
 * @param maybeInteger - The value to be checked.
 *
 * @public
 */
export function isInteger(maybeInteger: unknown): maybeInteger is Integer {
  return Number.isSafeInteger(maybeInteger);
}
