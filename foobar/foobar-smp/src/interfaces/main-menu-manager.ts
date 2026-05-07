import type { MenuObject } from "./menu-object";

/**
 * @public
 */
export interface MainMenuManager {
  /**
   * @param menu -
   * @param baseId -
   * @param count -
   */
  BuildMenu(menu: MenuObject, baseId: number, count: number): void;

  /**
   * @param id -
   */
  ExecuteByID(id: number): boolean;

  /**
   *
   * @param rootName - Must be one of the following: 'file', 'view', 'edit',
   *   'playback', 'library', 'help'
   */
  Init(rootName: string): void;
}
