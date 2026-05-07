/**
 * @constructor
 * @hideconstructor
 */
export function ThemeManager() {
  /**
   * @param {GdiGraphics} gr
   * @param {number} x
   * @param {number} y
   * @param {number} w
   * @param {number} h
   * @param {number=} [clip_x=0]
   * @param {number=} [clip_y=0]
   * @param {number=} [clip_w=0]
   * @param {number=} [clip_h=0]
   */
  this.DrawThemeBackground = function (
    gr,
    x,
    y,
    w,
    h,
    clip_x,
    clip_y,
    clip_w,
    clip_h,
  ) {}; // (void) [, clip_x][, clip_y][, clip_w][, clip_h]

  /**
   * @param {number} partid
   * @return {boolean}
   */
  this.IsThemePartDefined = function (partid) {}; // (boolean)

  /**
   * See {@link https://docs.microsoft.com/en-us/windows/win32/controls/parts-and-states}
   *
   * @param {number} partid
   * @param {number=} [stateid=0]
   */
  this.SetPartAndStateID = function (partid, stateid) {}; // (void)
}
