import type { TreeCollection } from "src/collection";

/**
 * {@link TreeList} is iterable collection of items.
 * Can contain duplicates.
 *
 * @example
 *
 * ```
 * const list = TreeList.create()
 *
 * const item1 = { id: 1 }
 * const item2 = { id: 2 }
 *
 * list.append(item1).append(2).prepend(item1)
 * // [ item1, item1, item2 ]
 *
 * ```
 *
 */
export interface TreeList<Item extends object = object>
  extends TreeCollection<Item> {
  /**
   * The {@link append} method adds an `item` to the end
   * of the {@link TreeList}
   *
   * @param item - The item to append
   */
  append(item: Item): TreeList<Item>;

  /**
   * The {@link prepend} method adds an `item` to the start
   * of the {@link TreeList}
   *
   * @param item - The item to prepend
   */
  prepend(item: Item): TreeList<Item>;

  /**
   * The {@link remove} method removes all occurrences of the passed `item`
   * from the {@link TreeList}
   *
   * @param item - - The item to removes
   */
  remove(item: Item): TreeList<Item>;

  /**
   * The {@link replace} method replaces all occurrences of the passed `item`
   * in {@link TreeList} to the `newItem`
   *
   * @param item - The item to be replaced
   * @param newItem - The new item to replace `item`
   */
  replace(item: Item, newItem: Item): TreeList<Item>;
}
