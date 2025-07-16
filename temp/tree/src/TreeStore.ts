import type { TreeCollection } from "./collection";

export interface TreeStore<TItem> {
  /**
   * Method {@link getChildren} returns children of the provided `item`
   *
   * @param item - TItem
   */
  getChildren(item: TItem): TreeCollection<Node>;
}