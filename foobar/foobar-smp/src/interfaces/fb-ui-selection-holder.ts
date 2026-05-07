import type { SelectionType } from "../enums";

import type { FbMetadbHandleList } from "./fb-metadb-handle-list";

/**
 * This is typically used to update the selection used by the default UI
 * artwork panel or any other panel that makes use of the preferences under
 * `File` \> `Preferences` \> `Display` \> `Selection viewers`. Use in
 * conjunction with the {@link Callbacks.on_focus} callback.
 *
 * ```ts
 *  // For playlist viewers
 *  const selectionHolder = fb.AcquireUiSelectionHolder();
 *
 *  selectionHolder.SetPlaylistSelectionTracking();
 *
 *  function on_focus(isFocused: boolean): void {
 *    if (isFocused) {
 *      // Updates the selection when panel regains focus
 *      selectionHolder.SetPlaylistSelectionTracking();
 *    }
 *  }
 * ```
 *
 * ```ts
 *  // For library viewers
 *  const selectionHolder = fb.AcquireUiSelectionHolder();
 *  let handleList = null;
 *
 *  function on_mouse_lbtn_up(x: number, y: number): void {
 *    // Presumably going to select something here...
 *    // handleList = ...;
 *    selectionHolder.SetSelection(handleList);
 *  }
 *
 *  function on_focus(isFocused: boolean): void {
 *    if (isFocused) {
 *      // Updates the selection when panel regains focus
 *      if (handleList && handleList.Count) {
 *        selectionHolder.SetSelection(handleList);
 *      }
 *    }
 *  }
 * ```
 *
 * @public
 */
export interface FbUiSelectionHolder {
  /**
   * The {@link FbUiSelectionHolder.SetPlaylistSelectionTracking} methods sets
   * selected items to playlist selection and enables tracking.
   *
   * When the playlist selection changes, the stored selection is automatically
   * updated. Tracking ends when a set method is called on any
   * `ui_selection_holder` or when the last reference to this
   * `ui_selection_holder` is released.
   */
  SetPlaylistSelectionTracking(): void;

  /**
   * The {@link FbUiSelectionHolder.SetPlaylistTracking} methods sets
   * selected items to playlist contents and enables tracking.
   *
   * When the playlist selection changes, the stored selection is automatically
   * updated. Tracking ends when a set method is called on any
   * `ui_selection_holder` or when the last reference to this
   * `ui_selection_holder` is released.
   */
  SetPlaylistTracking(): void;

  /**
   * The {@link FbUiSelectionHolder.SetSelection} methods sets the selected
   * items.
   *
   * @param handleList -
   * @param type - Selection type. Default {@link SelectionType.NoItem}.
   *
   */
  SetSelection(handleList: FbMetadbHandleList, type: SelectionType): void;
}
