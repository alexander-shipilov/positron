import type { FalsyLiteral } from "./falsy-literal";

/**
 * The {@link isFalsy} type-guard function determines whether the passed
 * `maybeFalsy` is a {@link FalsyLiteral} value.
 *
 * @param maybeFalsy - The value to be tested for being a {@link FalsyLiteral}.
 *
 * @returns The boolean value `true` if the given `maybeFalsy` is falsy
 *   value. Otherwise, `false`.
 *
 * @public
 */
export function isFalsy(maybeFalsy: unknown): maybeFalsy is FalsyLiteral {
  return !maybeFalsy;
}
