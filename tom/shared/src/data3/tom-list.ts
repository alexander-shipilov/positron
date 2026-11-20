import type { TomOrdered } from "./tom-ordered";

/**
 * The {@link TomList} interface represents a type consisting of a finite
 * ordered sequence of items.
 *
 * @public
 */
export interface TomList<TValue> extends Iterable<TValue>, TomOrdered<TValue> {
  /**
   * The {@link TomList.clone} method creates a shallow copy of this list.
   *
   * @returns A new instance of the {@link TomList} object.
   */
  clone(): TomList<TValue>;

  /**
   * The {@link TomList.equals} method determines if the passed `list` is equal
   * to this list.
   *
   * @remarks
   *   The {@link TomList.equals} method uses the "same-value-zero" equality
   *   comparison algorithm to determine whether elements are equal.
   *
   * @param list - The list with which to compare.
   *
   * @returns `true` if the size of this list is equal to `list.size` and every
   *   element in this list is equal to the element at the same index in `list`.
   */
  equals(list: TomList<TValue>): boolean;
}
