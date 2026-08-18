/**
 * The {@link size} function returns the size of the passed `iterator`
 *
 * @param iterable -
 */
export function size(iterable: Iterable<unknown>): number {
  const iterator = iterable[Symbol.iterator]();
  let count = 0;

  while (!iterator.next().done) {
    count += 1;
  }

  return count;
}
