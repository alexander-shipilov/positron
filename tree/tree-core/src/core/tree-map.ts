import type { TreeSetLike } from "./tree-set-like";

/**
 * Interface {@link TreeMap} describes key-valued collection
 *
 * @public
 */
export interface TreeMap<TKey, TItem> extends TreeSetLike<TKey> {
  /**
   * Method {@link get} returns a specified element from the {@link TreeMap}
   * object. If the value that is associated to the provided key is an object,
   * then you will get a reference to that object and any change made to that
   * object will effectively modify it inside the {@link TreeMap}.
   *
   * @param key - The key
   *
   * @returns Returns the element associated with the specified key. If no
   *   element is associated with the specified key, `undefined` is returned.
   */
  get(key: TKey): TItem | undefined;

  /**
   * Adds a new element with a specified key and value to the Map. If an
   * element with the same key already exists, the element will be updated.
   */
  set(key: TKey, value: TItem): this;
}
