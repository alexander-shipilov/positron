import type { Collection, Optional } from "@positron/lang";

export interface OrderedSet<TItem> extends Collection<number, TItem> {
  /**
   * Method {@link OrderedSet#add} appends a new element with a specified item
   * to the end of the {@link OrderedSet}.
   */
  add(item: TItem): this;

  /**
   * Method {@link OrderedSet#clear} removes all items from the
   * {@link OrderedSet}.
   */
  clear(): void;

  /**
   * Method {@link OrderedSet#delete}  removes a specified item from the
   * {@link OrderedSet}.
   *
   * @returns `true` if an element in the {@link OrderedSet} existed and has
   *   been removed, or `false` if the element does not exist.
   */
  delete(item: TItem): boolean;

  /**
   * Method {@link OrderedSet#forEach} executes a provided function once per
   * each item in the {@link OrderedSet} object, in insertion order.
   */
  forEach(
    callback: (item: TItem, index: number, set: OrderedSet<TItem>) => void,
    thisArg?: unknown,
  ): void;

  /**
   * Method {@link OrderedSet#has} checks whether {@link OrderedSet}
   * contains the specified `item`
   *
   * @returns a boolean indicating whether an element with the specified item
   *   exists in the {@link OrderedSet} or not.
   */
  has(item: TItem): boolean;

  /**
   * Method {@link OrderedSet#insert} inserts the passed `newItem` before
   * `refItem`.
   *
   * @param newItem - The item to insert
   * @param refItem - The item before which `item` is inserted.
   *
   * @returns `true` if `refItem` existed in {@link OrderedSet}, or `false`
   *   if the element does not exist.
   */
  insert(newItem: TItem, refItem: TItem): boolean;

  /**
   * Method {@link OrderedSet#item} returns an item at the specified `index`
   *
   * @param index - An index of
   */
  item(index: number): Optional<TItem>;

  /**
   * Method {@link OrderedSet#replace} replaces the passed `oldItem` by the
   * given `newItem`.
   *
   * @param newItem - The new item to replace oldItem.
   * @param oldItem - The item to be replaced
   *
   * @returns `true` if `oldItem` exists in the {@link OrderedSet} and was
   *   replaced, or `false` if {@link OrderedSet} does not contain `oldItem`.
   */
  replace(newItem: TItem, oldItem: TItem): boolean;

  /**
   * Property {@link OrderedSet#size} contains the number of elements in
   * {@link OrderedSet}.
   *
   * @returns the number of elements in {@link OrderedSet}.
   */
  readonly size: number;
}
