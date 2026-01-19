/**
 * The {@link TreeRegistry} interface describes an object which stores a data
 * associated with tree items.
 */
export interface TreeRegistry<TItem, TData> {
  /**
   * The {@link get} method of the {@link TreeRegistry} interface return a data
   * associated with the given item.
   *
   * @param item - The item to give associated data.
   */
  get(item: TItem): TData;
}
