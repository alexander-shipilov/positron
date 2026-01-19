/**
 * The {@link size} function returns the size of the passed `iterator`
 *
 * @param iterator
 */
export function size(iterator: Iterator<unknown>): number {
  let count = 0;

  while (!iterator.next().done) {
    count += 1;
  }

  return count;
}
