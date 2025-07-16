/**
 * {@link TreeListInterface} objects are collections of nodes, usually
 * returned by properties such as {@link TreeNodeInterface.childNodes}
 */
export interface TreeListInterface<TItem>
  extends ArrayLike<TItem>,
    Iterable<TItem> {
  /**
   * The forEach() method of the {@link TreeListInterface} interface calls
   * the callback given in parameter once for each value pair in the list, in
   * insertion order.
   *
   * @param callback - A function to execute on each element of collection. It
   *   accepts 2 parameters:
   *   `value` - The current element being processed in collection.
   *   `index` - The index of the `value` being processed in collection.
   */
  forEach(callback: (value: TItem, index: number, list: this) => void): void;

  /**
   * Returns a node from a {@link TreeListInterface} by `index`. This method
   * doesn't throw exceptions. A value of `null` is returned if the `index` is
   * out of range.
   *
   * @param index - The zero-based index of the node to be fetched.
   */
  item(index: number): TItem | null;
}
