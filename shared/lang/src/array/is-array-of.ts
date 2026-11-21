import type { TypeGuard } from "../type/type-guard";

/**
 * The {@link isArrayOf} type-guard function determines whether the passed
 * array `maybeArrayOf` is an array of the `TExpected` type.
 *
 * @param maybeArrayOf - The array to be checked.
 *
 * @param isType - The type-guard function to check each array item.
 *
 * @returns The boolean value `true` if every element satisfies `isType`;
 *   otherwise, `false`.
 *
 * @public
 */
export function isArrayOf<TItem, TExpected extends TItem>(
  maybeArrayOf: readonly TItem[],
  isType: TypeGuard<TItem, TExpected>,
): maybeArrayOf is readonly TExpected[] {
  return maybeArrayOf.every((item) => isType(item));
}
