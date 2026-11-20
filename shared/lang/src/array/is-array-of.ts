import type { TypeGuard } from "../type/type-guard";

/**
 * The {@link isArrayOf} type-guard function determines whether the passed
 * array `maybeArrayOf` is an array of the `TExpected` type.
 *
 * @param maybeArrayOf - The value to be checked.
 *
 * @param isType - The type-guard function to check array item.
 *
 * @public
 */
export function isArrayOf<TItem, TExpected extends TItem>(
  maybeArrayOf: readonly TItem[],
  isType: TypeGuard<TItem, TExpected>,
): maybeArrayOf is readonly TExpected[] {
  return maybeArrayOf.every((item) => isType(item));
}
