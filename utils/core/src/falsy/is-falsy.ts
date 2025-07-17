import type { Falsy } from "./falsy";

/**
 * The {@link isFalsy} function determines whether the passed
 * {@link maybeFalsy} is a {@link Falsy}.
 *
 * @param maybeFalsy - The value to be tested for being a {@link Falsy}.
 *
 * @returns The boolean value `true` if the given {@link maybeFalsy} is falsy
 *   value. Otherwise, `false`.
 *
 * @public
 */
export function isFalsy(maybeFalsy: unknown): maybeFalsy is Falsy {
  return !maybeFalsy;
}
