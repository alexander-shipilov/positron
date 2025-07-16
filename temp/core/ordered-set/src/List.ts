import type { Collection } from "@positron/lang";

import type { ListItem } from "./ListItem";

export interface List<TItem extends ListItem = ListItem>
  extends Collection<number, TItem>,
    Iterable<TItem> {
  /**
   * Removes all elements from the {@link List}.
   */
  clear(): void;

  /**
   * Removes a specified value from the {@link List}.
   *
   * @param item - The value to delete from the list.
   *
   * @returns Returns `true` if an `item` in the {@link List} existed and has
   *   been removed, or `false` if the `item` does not exist.
   */
  delete(item: TItem): boolean;

  /**
   * @param item - The value to test for presence in the {@link List} object.
   *
   * @returns a `boolean` indicating whether an element with the specified
   *   `value` exists in the {@link List} or not.
   */
  has(item: TItem): boolean;

  /**
   * Returns the index of the occurrence of a value in a list, or `-1` if it is
   * not present.
   *
   * @param item - The value to locate in the list.
   */
  indexOf(item: TItem): number;

  /**
   * Inserts a new element with a specified value before the given one.
   */
  insert(item: TItem, refItem?: TItem): this;

  /**
   * Returns an item at the specified `index`.
   */
  item(index: number): TItem | undefined;

  /**
   * Replaces existing item with the specified one
   */
  replace(item: TItem, newItem: TItem): this;

  /**
   * @returns the number of (unique) elements in {@link List}.
   */
  readonly size: number;
}
