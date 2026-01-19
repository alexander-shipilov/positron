/**
 * The {@link splittings} function returns a new `IterableIterator` object
 * that contains all possible pairs.
 *
 * @public
 */
export function* splittings<TItem>(
  array: readonly TItem[],
): IterableIterator<[[TItem, ...TItem[]], [TItem, ...TItem[]]]> {
  const { length } = array;

  for (let i = 1; i < length; i++) {
    yield [
      [array[0], ...array.slice(1, i)],
      [array[i], ...array.slice(i + 1)],
    ];
  }
}
