import type { DomList } from "./dom-list";
import type { DomSet } from "./dom-set";

export interface DomOrderedSet<TItem> extends DomList<TItem>, DomSet<TItem> {
  /**
   * Method {@link DomOrderedSet.insert} inserts a new element with a specified
   * `value` before `beforeValue`.
   *
   * @param value -
   * @param beforeValue -
   *
   * @returns `true` if the `beforeValue` in the {@link DomSet} exists and
   *   `value` has been added, or `false` if the `beforeValue` does not exist.
   *
   * @public
   */
  insert(value: TItem, beforeValue: TItem): boolean;
}
