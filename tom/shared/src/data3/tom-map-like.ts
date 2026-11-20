import type { TomSetLike } from "./tom-set-like";

/**
 * The {@link TomMapLike} interface represents a finite collection of elements,
 * where each element is associated with a unique key.
 *
 * @public
 */
export interface TomMapLike<TValue, TKey> extends TomSetLike<TKey> {
  /**
   * The {@link TomMapLike.values} method returns a new iterator object that
   * contains the values for each element in this collection.
   *
   * @returns A new iterable iterator object.
   */
  values(): IterableIterator<TValue>;
}
