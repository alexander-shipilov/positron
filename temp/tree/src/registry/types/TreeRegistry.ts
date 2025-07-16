/**
 * Registry. Object to store tree node related info.
 */
export interface TreeRegistry<Node extends object, Value> {
  /**
   * Returns a specified element from the {@link TreeRegistry} object.
   * If the value that is associated to the provided `key` is an object, then
   * you will get a reference to that object and any change made to that
   * object will effectively modify it inside the {@link TreeRegistry}.
   *
   * @returns the element associated with the specified key.
   *  If no element is associated with the specified `key`, `undefined` is
   *  returned.
   */
  get(key: Node): Value | undefined;

  /**
   * @returns a `boolean` indicating whether an element with
   *  the specified `key` exists or not.
   */
  has(key: Node): boolean;
}
