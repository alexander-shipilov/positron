/**
 * @constructor
 * @hideconstructor
 */
export function ContextMenuManager() {
  /**
   * @param {MenuObject} menu_obj
   * @param {number} base_id
   * @param {number=} [max_id=-1]
   */
  this.BuildMenu = function (menu_obj, base_id, max_id) {}; // (void)

  /**
   * @param {number} id
   * @return {boolean}
   */
  this.ExecuteByID = function (id) {}; // (boolean)

  /**
   * Initializes context menu by supplied tracks.
   *
   * @param {FbMetadbHandleList} handle_list
   */
  this.InitContext = function (handle_list) {}; // (void)

  /**
   * Shows playlist specific options that aren't available when passing a
   * handle list to {@link ContextMenuManager#InitContext}.
   */
  this.InitContextPlaylist = function () {}; // (void)

  /**
   * Initializes context menu by currently played track.
   *
   * @method
   */
  this.InitNowPlaying = function () {}; // (void)
}
