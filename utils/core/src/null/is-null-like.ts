import type { NullLike } from "./null-like";

/**
 * The {@link isNullLike} function is a type-guard function that determines
 * whether the passed {@link maybeNullLike} is a {@link NullLike}.
 *
 * @param maybeNullLike - The value to be tested for being a {@link NullLike}.
 *
 * @returns The boolean value `true` if the given {@link maybeNullLike} is a
 *   {@link NullLike}. Otherwise, `false`.
 *
 * @public
 */
export function isNullLike<TValue = unknown>(
  maybeNullLike: NullLike | TValue,
): maybeNullLike is NullLike {
  return maybeNullLike == null;
}
