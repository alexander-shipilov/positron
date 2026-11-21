import type { Any } from "../any/any";

/**
 * The {@link IterableCollection} interface describes a key-valued collection.
 *
 * @typeParam TKey - The type of keys in the collection.
 *
 * @typeParam TValue - The type of values in the collection.
 *
 * @public
 */
export interface IterableCollection<TKey, TValue> {
  /**
   * The {@link IterableCollection.entries} method returns an iterable of key
   * and value pairs for every entry in the collection.
   *
   * @returns An iterable iterator of `[TKey, TValue]` pairs.
   */
  entries(): IterableIterator<[TKey, TValue]>;

  /**
   * The {@link IterableCollection.forEach} method calls `callback` once for
   * each value pair in the collection.
   *
   * @param callback - The function to execute for each entry.
   *
   * @param thisArg - The value to use as `this` when executing `callback`.
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
   * The {@link IterableCollection.keys} method returns an iterable of keys in
   * the collection.
   *
   * @returns An iterable iterator of keys.
   */
  keys(): IterableIterator<TKey>;

  /**
   * The {@link IterableCollection.values} method returns an iterable of values
   * in the collection.
   *
   * @returns An iterable iterator of values.
   */
  values(): IterableIterator<TValue>;
}
