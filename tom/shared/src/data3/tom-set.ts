import type { TomKeyed } from "./tom-keyed";

/**
 * The {@link TomSet} interface represents a finite collection of the unordered
 * unique elements.
 *
 * @remarks
 *   Unordered means that there is no index that determines an element's
 *   position.
 *
 *   Usually, the sets are stored values in insertion order.
 *   The insertion order corresponds to the order in which each element
 *   was inserted into the set.
 *
 * @public
 */
export interface TomSet<TValue>
  extends
    Iterable<TValue>, //
    TomKeyed<TValue, TValue> {
  /**
   * The {@link TomSet.add} method inserts the specified `value` into this set,
   * if it is not already present.
   *
   * @param value - The value to add to this set.
   *   Objects are compared by reference, not by value.
   *
   * @returns `true` if the `value` is added to this set.
   */
  add(value: TValue): boolean;

  /**
   * The {@link TomSet.clone} method creates a shallow copy of this set.
   *
   * @returns A new instance of the {@link TomSet} object.
   */
  clone(): TomSet<TValue>;

  /**
   * The {@link TomSet.equals} method determines if the passed `set` is equal
   * to this set.
   *
   * @remarks
   *   The {@link TomSet.equals} method uses the "same-value-zero" equality
   *   comparison algorithm to determine whether elements are equal.
   *
   * @param set - The set with which to compare.
   *
   * @returns `true` if the size of this set is equal to `set.size` and every
   *   element in this set is containing in `set`.
   */
  equals(set: TomSet<TValue>): boolean;
}
