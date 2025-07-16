// noinspection ES6PreferShortImport
import type { TreeList } from "./TreeList";

/**
 * Factory object to create instance of {@link TreeList}
 */
export interface TreeListFactory {
  /**
   * Creates tree list
   */
  create<Item extends object = object>(): TreeList<Item>;

  /**
   * Checks if the given {@link maybeList} is `{@link TreeList}`
   *
   * @param maybeList - Value to check
   */
  isList(maybeList: unknown): maybeList is TreeList;
}
