/**
 * The {@link isNonEmptyArray} type-guard function determines whether the passed
 * array `maybeNonEmptyArray` is not empty.
 *
 * @param maybeNonEmptyArray - The array to check.
 *
 * @returns The boolean value `true` if `maybeNonEmptyArray` contains at least
 *   one element; otherwise, `false`.
 *
 * @public
 */
export function isNonEmptyArray<TItem>(
  maybeNonEmptyArray: readonly TItem[],
): maybeNonEmptyArray is readonly [TItem, ...TItem[]] {
  return maybeNonEmptyArray.length > 0;
}
