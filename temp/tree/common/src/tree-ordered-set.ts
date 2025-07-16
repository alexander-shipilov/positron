import type { TreeList } from "./tree-list";
import type { TreeSet } from "./tree-set";

export interface TreeOrderedSet<TItem> extends TreeList<TItem>, TreeSet<TItem> {
  /**
   * Method {@link insert} inserts a new element with a specified `value` before
   *   `beforeValue`.
   *
   * @param value - A
   * @param beforeValue
   *
   * @returns `true` if the `beforeValue` in the {@link TreeSet} exists and
   *   `value` has been added, or `false` if the `beforeValue` does not exist.
   *
   * @public
   */
  insert(value: TItem, beforeValue: TItem): boolean;
}
