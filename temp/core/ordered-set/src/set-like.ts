import type { Collection } from "@positron/lang";

export interface SetLike<TItem> extends Collection<TItem, TItem> {
  /**
   * Method {@link SetLike#add} appends a new element with a specified item
   * to the end of the {@link SetLike}.
   */
  add(item: TItem): this;

  /**
   * Method {@link SetLike#clear} removes all items from the
   * {@link SetLike}.
   */
  clear(): void;

  /**
   * Method {@link SetLike#delete}  removes a specified item from the
   * {@link SetLike}.
   *
   * @returns `true` if an element in the {@link SetLike} existed and has
   *   been removed, or `false` if the element does not exist.
   */
  delete(item: TItem): boolean;

  /**
   * Method {@link SetLike#forEach} executes a provided function once per
   * each item in the {@link SetLike} object, in insertion order.
   */
  forEach(
    callback: (item: TItem, item2: TItem, set: SetLike<TItem>) => void,
    thisArg?: unknown,
  ): void;

  /**
   * Method {@link SetLike#has} checks whether {@link SetLike}
   * contains the specified `item`
   *
   * @returns a boolean indicating whether an element with the specified item
   *   exists in the {@link SetLike} or not.
   */
  has(item: TItem): boolean;

  /**
   * Property {@link SetLike#size} contains the number of elements in
   * {@link SetLike}.
   *
   * @returns the number of elements in {@link SetLike}.
   */
  readonly size: number;
}
