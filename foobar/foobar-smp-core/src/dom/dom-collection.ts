/**
 * The {@link DomCollection} interface represents a key-valued collection.
 *
 * @public
 */
export interface DomCollection<TKey, TValue> {
  /**
   * The {@link DomCollection.entries} method of the {@link DomCollection}
   * interface returns an iterable of key, value pairs for every entry in the
   * collection.
   */
  entries(): IterableIterator<[TKey, TValue]>;

  /**
   * The {@link DomCollection.forEach} method of the {@link DomCollection}
   * interface calls the callback given in parameter once for each value pair
   * in the list.
   */
  forEach(
    callback: (
      value: TValue,
      key: TKey,
      parent: DomCollection<TKey, TValue>,
    ) => void,
    thisArg?: unknown,
  ): void;

  /**
   * The {@link DomCollection.keys} method of the {@link DomCollection}
   * interface returns an iterable of keys in the collection.
   */
  keys(): IterableIterator<TKey>;

  /**
   * The {@link DomCollection.values} method of the {@link DomCollection}
   * interface returns an iterable of values in the collection
   */
  values(): IterableIterator<TValue>;
}
