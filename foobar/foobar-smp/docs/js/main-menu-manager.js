/**
 * @constructor
 * @hideconstructor
 */
export function MainMenuManager() {
  /**
   * @param {MenuObject} menu_obj
   * @param {number} base_id
   * @param {number} count
   */
  this.BuildMenu = function (menu_obj, base_id, count) {}; // (void)

  /**
   * @param {number} id
   * @return {boolean}
   */
  this.ExecuteByID = function (id) {}; // (boolean)

  /**
   * @param {string} root_name Must be one of the following: 'file', 'view', 'edit', 'playback', 'library', 'help'
   */
  this.Init = function (root_name) {}; // (void)
}
