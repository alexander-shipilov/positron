import type { NullLike } from "./null-like";

/**
 * The {@link isNullLike} function is a type-guard function that determines
 * whether the passed `maybeNullLike` is a {@link NullLike}.
 *
 * @param maybeNullLike - The value to be tested for being a {@link NullLike}.
 *
 * @returns The boolean value `true` if the given `maybeNullLike` is a
 *   {@link NullLike}. Otherwise, `false`.
 *
 * @public
 */
export function isNullLike(maybeNullLike: unknown): maybeNullLike is NullLike {
  return maybeNullLike == null;
}
