/**
 * The {@link split} function splits the passed `array` into two parts: the
 * first part contains the elements up to the given `index`, and the second
 * part contains the rest.
 *
 * @param array - The array to split
 * @param index - The index
 *
 * @public
 */
export function split<TItem>(
  array: TItem[],
  index: number,
): [TItem[], TItem[]] {
  return [array.slice(0, index), array.slice(index)];
}
