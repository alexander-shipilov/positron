/**
 * The {@link TomSetLike} interface represents a `set-like` collection.
 * The set-like collection is a collection of a finite number of elements, each
 * of which is associated with a unique key.
 *
 * @public
 */
export interface TomSetLike<TKey> {
  /**
   * The {@link TomSetLike.size} property represents this collection size.
   */
  readonly size: number;

  /**
   * The {@link TomSetLike.has} method determines whether an element with the
   * specified `key` exists in this collection.
   *
   * @param key - The key to search for.
   *
   * @returns `true` if an element with the specified `key` exists in this
   *   collection; otherwise `false`.
   */
  has(key: TKey): boolean;

  /**
   * The {@link TomSetLike.keys} method returns a new iterator object that
   * contains the keys for each element in this collection.
   *
   * @returns A new iterable iterator object.
   */
  keys(): IterableIterator<TKey>;
}
