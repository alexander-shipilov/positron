import type { TreeListInterface } from "./TreeList.interface";

export interface TreeItemSetInterface<TItem> extends TreeListInterface<TItem> {
  /**
   * Returns the first item in the set.
   */
  firstItem(): TItem | null;

  /**
   * Inserts the given `item` before the `refItem`.
   *
   * @param item - The item to be inserted.
   * @param refItem - The item before which `item` is inserted.
   */
  insertItem(item: TItem, refItem: TItem | null): this;

  /**
   * Returns the last item in the set.
   */
  lastItem(): TItem | null;

  /**
   * Returns the next item of the given `item` or `null`.
   *
   * @param item - Item
   */
  nextItem(item: TItem): TItem | null;

  /**
   * Returns the previous item of the given `item` or `null`.
   *
   * @param item - Item
   */
  previousItem(item: TItem): TItem | null;

  /**
   * @override
   */
  removeAll(): this;

  /**
   * Replaces the given `oldItem` by the `newItem`.
   *
   * @param newItem - The item to replace `oldItem`
   * @param oldItem - The item to be replaced
   */
  replaceItem(newItem: TItem, oldItem: TItem): this;
}
