import type { Any } from "../any/any";

/**
 * The {@link IterableCollection} interface describes a key-valued collection.
 *
 * @public
 */
export interface IterableCollection<TKey, TValue> {
  /**
   * The {@link IterableCollection.entries} method of the
   * {@link IterableCollection} interface returns an iterable of key, value
   * pairs for every entry in the collection.
   */
  entries(): IterableIterator<[TKey, TValue]>;

  /**
   * The {@link IterableCollection.forEach} method of the
   * {@link IterableCollection} interface calls the callback given in parameter
   * once for each value pair in the list.
   */
  forEach(
    callback: (
      value: TValue,
      key: TKey,
      parent: IterableCollection<TKey, TValue>,
    ) => void,
    thisArg?: Any,
  ): void;

  /**
   * The {@link IterableCollection.keys} method of the {@link
   * IterableCollection} interface returns an iterable of keys in the
   * collection.
   */
  keys(): IterableIterator<TKey>;

  /**
   * The {@link IterableCollection.values} method of the
   * {@link IterableCollection} interface returns an iterable of values in the
   * collection
   */
  values(): IterableIterator<TValue>;
}
