/**
 * Interface {@link DomList} describes read-only iterable list of
 * items.
 *
 * It's possible to loop over the items in a {@link DomList} using
 * a `for` loop:
 *
 * @example
 * ```ts
 *  for (let i = 0; i < index.length; i++) {
 *     let item = index[i];
 *  }
 * ```
 *
 * Don't use `for...in` to enumerate the items in {@link DomList}, since
 * they will also enumerate its `length` and `item` properties and cause
 * errors if your script assumes it only has to deal with items.
 *
 * Also, `for...in` is not guaranteed to visit the properties in
 * any particular order.
 *
 * `for...of` loops over {@link DomList} objects correctly:
 * ```ts
 *  for (const item of list) {
 *     // some code
 *  }
 * ```
 */
export interface DomList<TItem> {
  readonly [index: number]: TItem;

  /**
   * The {@link DomList.size} property returns the number of (unique)
   * elements in this list-like object.
   */
  readonly size: number;

  /**
   * The {@link DomList.forEach} method of the {@link DomList} interface
   * calls the `callback` given in parameter once for each value pair in the
   * list, in insertion order.
   *
   * @param callback
   * @param thisArg
   */
  forEach(
    callback: (value: TItem, key: number, parent: DomList<TItem>) => void,
    thisArg?: unknown,
  ): void;

  /**
   * The {@link item} method of the {@link DomList} interface returns an
   * item from a {@link DomList} by index. A value of `undefined` is returned
   * if the `index` is out of range.
   *
   * @example
   * ```ts
   *  const second = list.item(1)
   *  // the second item in list or `undefined`
   *  // if list length less than 2
   *
   *  const third = list[2]
   *  // the third item in list or `undefined`
   *  // if list length less than 3
   * ```
   *
   * @param index - The index of the item to be fetched. The index is
   *   zero-based.
   *
   * @returns An item of the list or `undefined` if list does not have an item
   *   with the specified `index`
   */
  item(index: number): TItem | undefined;
}
