/**
 * Interface {@link TreeCollection} describes read-only iterable collection of
 * items.
 *
 * It's possible to loop over the items in a {@link TreeCollection} using
 * a `for` loop:
 *
 * ```ts
 *  for (let i = 0; i < index.length; i++) {
 *     let item = index[i];
 *  }
 * ```
 *
 * Don't use `for...in` to enumerate the items in {@link TreeCollection}, since
 * they will also enumerate its `length` and `item` properties and cause
 * errors if your script assumes it only has to deal with items.
 *
 * Also, `for...in` is not guaranteed to visit the properties in
 * any particular order.
 *
 * `for...of` loops over {@link TreeCollection} objects correctly:
 * ```ts
 *  for (const item of collection) {
 *     // some code
 *  }
 * ```
 *
 * {@link TreeCollection} also supports the iterator method ({@link forEach})
 * as well as {@link entries}, {@link keys}, and {@link values}.
 */
export interface TreeCollection<TItem>
  extends ArrayLike<TItem>, IterableIterator<TItem>, Collection<number, TItem> {
  /**
   * The {@link item} method returns an item from a {@link TreeCollection} by
   * index. A value of `undefined` is returned if the `index` is out of range.
   *
   * @example
   * ```ts
   *  const second = collection.item(1)
   *  // the second item in collection or `null`
   *  // if collection length less than 2
   *
   *  const third = collection[2]
   *  // the third item in collection or `undefined`
   *  // if collection length less than 3
   * ```
   *
   * @param index - The index of the node to be fetched. The index is
   *   zero-based.
   */
  item(index: number): TItem | undefined;
}
