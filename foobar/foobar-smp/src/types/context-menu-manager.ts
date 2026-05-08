import type { FbMetadbHandleList } from "./fb-metadb-handle-list";
import type { MenuObject } from "./menu-object";

/**
 * @public
 */
export interface ContextMenuManager {
  /**
   * @param menuObject -
   * @param baseId -
   * @param maxId - Default `-1`
   */
  BuildMenu(menuObject: MenuObject, baseId: number, maxId: number): void;

  /**
   * @param id -
   */
  ExecuteByID(id: number): boolean;

  /**
   * The {@link ContextMenuManager.InitContext} method initializes context menu
   * by supplied tracks.
   *
   * @param handleList -
   */
  InitContext(handleList: FbMetadbHandleList): void;

  /**
   * The {@link ContextMenuManager.InitContextPlaylist} method shows playlist
   * specific options that aren't available when passing a handle list to
   * {@link ContextMenuManager.InitContext}.
   */
  InitContextPlaylist(): void;

  /**
   * The {@link ContextMenuManager.InitNowPlaying} method initializes context
   * menu by currently played track.
   */
  InitNowPlaying(): void;
}
