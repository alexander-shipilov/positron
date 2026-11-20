import type { TomCollection } from "./tom-collection";
import type { TomEntry } from "./tom-entry";
import type { TomIterator } from "./tom-iterator";

/**
 * The {@link TomKeyed} interface represents a finite collection of elements of
 * any type, where each element is associated with a specific unique key.
 *
 * @public
 */
export interface TomKeyed<TValue, TKey> extends TomCollection {
  /**
   * The {@link TomKeyed.delete} method removes the entry specified by the
   * key from this collection.
   *
   * @remarks
   *
   *   The {@link TomKeyed.delete} method uses same-value-zero equality
   *   algorithm to find `key` in this collection. This algorithm works like
   *   strict equality `===` (where `-0` and `+0` are considered equal), with
   *   the exception that `NaN` is considered equal to itself.
   *
   * @param key - The key to remove from this collection.
   *   Keys are compared using same-value-zero algorithm. This means that
   *   object key are compared by reference, not by value.
   *
   * @returns `true` if the entry is removed from this collection.
   *   `false` if the key is not found in this collection.
   */
  delete(key: TKey): boolean;

  /**
   * The {@link TomKeyed.entries} method returns a new iterator object
   * that contains the `[key, value]` pairs for each entry in this
   * collection.
   *
   * @returns A new iterable iterator object.
   */
  entries(): TomIterator<TomEntry<TValue, TKey>>;

  /**
   * The {@link TomKeyed.has} method returns a boolean indicating whether an
   * entry with the specified `key` exists in this collection or not.
   *
   * @param key - The key of the entry to test for presence in this collection.
   *   Object keys are compared by reference, not by value.
   *
   * @returns `true` if an entry with the specified key exists in this
   *   collection; otherwise `false`.
   */
  has(key: TKey): boolean;

  /**
   * The {@link TomKeyed.keys} method returns a new iterator object that
   * contains the keys for each element in this collection.
   *
   * @returns A new iterable iterator object.
   */
  keys(): TomIterator<TKey>;

  /**
   * The {@link TomKeyed.values} method returns a new iterator object that
   * contains the values for each element in this collection.
   *
   * @returns A new iterable iterator object.
   */
  values(): TomIterator<TValue>;
}
