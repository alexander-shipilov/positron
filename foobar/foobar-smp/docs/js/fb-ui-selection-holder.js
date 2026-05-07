/**
 * This is typically used to update the selection used by the default UI artwork panel
 * or any other panel that makes use of the preferences under
 * File > Preferences > Display > Selection viewers. Use in conjunction with the {@link module:callbacks~on_focus on_focus}
 * callback.
 *
 * @constructor
 * @hideconstructor
 *
 * @example <caption>For playlist viewers</caption>
 * let selection_holder = fb.AcquireUiSelectionHolder();
 * selection_holder.SetPlaylistSelectionTracking();
 *
 * function on_focus(is_focused) {
 *     if (is_focused) { // Updates the selection when panel regains focus
 *         selection_holder.SetPlaylistSelectionTracking();
 *     }
 * }
 *
 * @example <caption>For library viewers</caption>
 * let selection_holder = fb.AcquireUiSelectionHolder();
 * let handle_list = null;
 *
 * function on_mouse_lbtn_up(x, y) { // Presumably going to select something here...
 *    handle_list = ...;
 *    selection_holder.SetSelection(handle_list);
 * }
 *
 * function on_focus(is_focused) {
 *    if (is_focused) { // Updates the selection when panel regains focus
 *        if (handle_list && handle_list.Count)
 *            selection_holder.SetSelection(handle_list);
 *    }
 * }
 */
export function FbUiSelectionHolder() {
  /**
   * Sets selected items to playlist selection and enables tracking.<br>
   * When the playlist selection changes, the stored selection is automatically
   * updated. Tracking ends when a set method is called on any ui_selection_holder
   * or when the last reference to this ui_selection_holder is released.
   */
  this.SetPlaylistSelectionTracking = function () {}; // (void)

  /**
   * Sets selected items to playlist contents and enables tracking.<br>
   * When the playlist selection changes, the stored selection is automatically
   * updated. Tracking ends when a set method is called on any ui_selection_holder
   * or when the last reference to this ui_selection_holder is released.
   */
  this.SetPlaylistTracking = function () {}; // (void)

  /**
   * Sets the selected items.
   *
   * @param {FbMetadbHandleList} handle_list
   *
   * @param {number} [type=0] Selection type. Possible values:<br>
   *     0 - default, undefined<br>
   *     1 - active_playlist_selection<br>
   *     2 - caller_active_playlist<br>
   *     3 - playlist_manager<br>
   *     4 - now_playing<br>
   *     5 - keyboard_shortcut_list<br>
   *     6 - media_library_viewer
   *
   */
  this.SetSelection = function (handle_list, type) {}; // (void)
}
