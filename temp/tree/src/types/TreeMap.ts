import type { TreeStoreItem } from "./TreeStoreItem";

export interface TreeMap<
  Node,
  Item extends TreeStoreItem<Node> = TreeStoreItem<Node>,
> {
  /**
   * Returns a specified element from the {@link TreeMap} object.
   * If the value that is associated to the provided `key` is an object, then
   * you will get a reference to that object and any change made to that
   * object will effectively modify it inside the {@link TreeMap}.
   *
   * @returns the element associated with the specified key.
   *  If no element is associated with the specified `key`, `undefined` is
   *  returned.
   */
  get(key: Node): Item | undefined;

  /**
   * @returns a `boolean` indicating whether an element with the specified `key`
   *  exists or not.
   */
  has(key: Node): boolean;

  /**
   * Adds a new element with a specified `key` and `value` to the {@link
   * TreeMap}. If an element with the same `key` already exists, the element
   * will be updated.
   */
  set(key: Node, value: Item): void;
}
