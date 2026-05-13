import type { MenuObject } from "./menu-object";

/**
 * The {@link MainMenuManager} interface represents the object used to manage
 * menu.
 *
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
   *   'playback', 'library', 'help'. todo: add enumeration
   */
  Init(rootName: string): void;
}
