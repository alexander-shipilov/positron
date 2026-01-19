/**
 * The {@link isNonEmptyArray} function checks if the passed `array` is not
 * empty.
 *
 * @param array - The array to check.
 */
export function isNonEmptyArray<TItem>(
  array: TItem[],
): array is [TItem, ...TItem[]] {
  return array.length > 0;
}
