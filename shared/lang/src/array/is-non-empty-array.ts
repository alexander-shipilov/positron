/**
 * The {@link isNonEmptyArray} function determines whether the passed array
 * `maybeNonEmptyArray` is not empty.
 *
 * @param maybeNonEmptyArray - The array to check.
 *
 * @public
 */
export function isNonEmptyArray<TItem>(
  maybeNonEmptyArray: TItem[],
): maybeNonEmptyArray is [TItem, ...TItem[]] {
  return maybeNonEmptyArray.length > 0;
}
