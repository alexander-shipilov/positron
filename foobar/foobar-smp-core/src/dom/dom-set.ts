import type { DomSetLike } from "./dom-set-like";

/**
 * The interface {@link DomSet} describes an object which lets you store
 * unique values of any type, whether primitive values or object references.
 *
 * @public
 */
export interface DomSet<TItem> extends DomSetLike<TItem> {
  /**
   * The {@link add} method of {@link DomSet} instances inserts a new element
   * with a specified `value` in to this set, if there isn't an element with
   * the same `value` already in this set.
   *
   * @param value - The value to add to the {@link DomSet}
   *   object.
   *
   * @public
   */
  add(value: TItem): boolean;

  /**
   * The {@link delete} method of {@link DomSet} instances removes a specified
   * `value` from this set, if it is in the set.
   *
   * @param value -The value to remove from {@link DomSet}.
   *
   * @returns Returns `true` if value was already in {@link DomSet}; otherwise
   *   `false`.
   *
   *
   * @public
   */
  delete(value: TItem): boolean;
}
