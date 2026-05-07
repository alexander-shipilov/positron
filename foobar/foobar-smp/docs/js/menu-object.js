/**
 * @constructor
 * @hideconstructor
 */
export function MenuObject() {
  /**
   * @param {number} flags See Flags.js > Used in AppendMenuItem()
   * @param {number} item_id Integer greater than 0. Each menu item needs a unique id.
   * @param {string} text
   */
  this.AppendMenuItem = function (flags, item_id, text) {}; // (void)

  /** @method */
  this.AppendMenuSeparator = function () {}; // (void)

  /**
   * @param {MenuObject} parent_menu
   * @param {number} flags See Flags.js > Used in AppendMenuItem()
   * @param {string} text
   */
  this.AppendTo = function (parent_menu, flags, text) {}; // (void)

  /**
   * @param {number} item_id
   * @param {boolean} check
   */
  this.CheckMenuItem = function (item_id, check) {}; // (void)

  /**
   * @param {number} first_item_id
   * @param {number} last_item_id
   * @param {number} selected_item_id
   */
  this.CheckMenuRadioItem = function (
    first_item_id,
    last_item_id,
    selected_item_id,
  ) {}; // (void)

  /**
   * @param {number} x
   * @param {number} y
   * @param {number=} [flags=0] See Flags.js > Used in TrackPopupMenu().
   * @return {number}
   */
  this.TrackPopupMenu = function (x, y, flags) {}; // (uint) [, flags]
}
