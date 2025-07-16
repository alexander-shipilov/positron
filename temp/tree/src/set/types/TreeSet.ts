import type { TreeList } from "src/list";

/**
 *
 */
export interface TreeSet<Item extends object = object> extends TreeList<Item> {
  /**
   * Returns an index of the specified `item` or `-1` of {@link TreeSet}
   * does not contain an `item`
   *
   * @param item - The item
   */
  indexOf(item: Item): number;
}
