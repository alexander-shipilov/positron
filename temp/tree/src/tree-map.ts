/**
 * Interface {@link Tree}
 *
 * @public
 */
export interface TreeMap<TKey, TItem> {
  /**
   * Returns a specified element from the Map object. If the value that is
   * associated to the provided key is an object, then you will get a reference
   * to that object and any change made to that object will effectively modify
   * it inside the Map.
   * @returns Returns the element associated with the specified key. If no
   *   element is associated with the specified key, undefined is returned.
   */
  get(key: TKey): TItem | undefined;

  /**
   * @returns boolean indicating whether an element with the specified key
   *   exists or not.
   */
  has(key: TKey): boolean;

  /**
   * Adds a new element with a specified key and value to the Map. If an
   * element with the same key already exists, the element will be updated.
   */
  set(key: TKey, value: TItem): this;

  /**
   * @returns the number of elements in the Map.
   */
  readonly size: number;
}
