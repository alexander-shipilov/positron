/**
 * The {@link Collection} interface describes a key-valued collection.
 *
 * @public
 */
export interface Collection<TKey, TValue> {
  /**
   * The {@link entries} method of the {@link Collection} interface returns an
   * iterable of key, value pairs for every entry in the collection.
   */
  entries(): IterableIterator<[TKey, TValue]>;

  /**
   * The {@link forEach} method of the {@link Collection} interface calls the
   * callback given in parameter once for each value pair in the list.
   */
  forEach(
    callback: (
      value: TValue,
      key: TKey,
      parent: Collection<TKey, TValue>,
    ) => void,
    thisArg?: unknown,
  ): void;

  /**
   * The {@link keys} method of the {@link Collection} interface returns an
   * iterable of keys in the collection.
   */
  keys(): IterableIterator<TKey>;

  /**
   * The {@link values} method of the {@link Collection} interface returns an
   * iterable of values in the collection
   */
  values(): IterableIterator<TValue>;
}
