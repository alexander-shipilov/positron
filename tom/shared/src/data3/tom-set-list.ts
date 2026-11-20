import type { TomKeyed } from "./tom-keyed";
import type { TomOrdered } from "./tom-ordered";

export interface TomSetList<TValue>
  extends
    Iterable<TValue>, //
    TomKeyed<TValue, TValue>,
    TomOrdered<TValue> {
  /**
   * The {@link TomSetList.clone} method creates a shallow copy of this set.
   *
   * @returns A new instance of the {@link TomSetList}.
   */
  clone(): TomSetList<TValue>;

  /**
   * The {@link TomSetList.equals} method determines if the passed `set` is
   * equal to this set.
   *
   * @remarks
   *   The {@link TomSetList.equals} method uses the "same-value-zero"
   *   equality comparison algorithm to determine whether elements are equal.
   *
   * @param set - The set with which to compare.
   *
   * @returns `true` if the size of this set is equal to `set.size` and every
   *   element in this set is equal to the element at the same index in `set`.
   */
  equals(set: TomSetList<TValue>): boolean;
}
