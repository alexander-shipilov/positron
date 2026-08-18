/**
 * The {@link map} function returns a new iterator helper object that yields
 * elements of the passed `iterable`, each transformed by a mapping function.
 *
 * @param iterable - Iterable object
 * @param callback - The mapping function
 */
export function* map<TItem, TResult>(
  iterable: Iterable<TItem>,
  callback: (item: TItem, index: number) => TResult,
): IterableIterator<TResult> {
  let index = 0;

  for (const item of iterable) {
    yield callback(item, index++);
  }
}
