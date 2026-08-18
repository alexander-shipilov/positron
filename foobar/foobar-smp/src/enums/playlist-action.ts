/**
 * The {@link PlaylistAction} enumeration represents playlist actions.
 *
 * @remarks
 * The {@link PlaylistAction} enumeration is used by:
 * {@link FbPlaylistManager.GetPlaylistLockedActions},
 * {@link FbPlaylistManager.SetPlaylistLockedActions}.
 *
 * @public
 */
export enum PlaylistAction {
  /**
   * Add items action.
   */
  AddItems = "AddItems",

  /**
   * Execute default action.
   */
  ExecuteDefaultAction = "ExecuteDefaultAction",

  /**
   * Remove items action.
   */
  RemoveItems = "RemoveItems",

  /**
   * Remove playlist action.
   */
  RemovePlaylist = "RemovePlaylist",

  /**
   * Rename playlist action.
   */
  RenamePlaylist = "RenamePlaylist",

  /**
   * Reorder items action.
   */
  ReorderItems = "ReorderItems",

  /**
   * Replace items action.
   */
  ReplaceItems = "ReplaceItems",
}
