import type { TypeGuard } from "../type-guard";

/**
 * The {@link isArrayOf} function is a type-guard function that determines
 * whether the passed array is the array of `TExpectedItem`
 *
 * @param maybeArrayOf - The value to be checked.
 * @param isType - The type-guar function to check array item
 *
 * @public
 */
export function isArrayOf<TItem, TExpectedItem extends TItem>(
  maybeArrayOf: readonly TItem[],
  isType: TypeGuard<TItem, TExpectedItem>,
): maybeArrayOf is readonly TExpectedItem[] {
  return maybeArrayOf.every((item) => isType(item));
}
