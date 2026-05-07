/**
 * @constructor
 * @hideconstructor
 */
export function FbTooltip() {
  /**
   * Note: this also updates text on the active tooltip
   * i.e. there is no need to manually cycle Deactivate()/Activate()
   * to update text.
   *
   * @type {string}
   *
   * @example
   * let tooltip = window.Tooltip;
   * tooltip.Text = "Whoop";
   */
  this.Text = undefined; // (string) (read, write)

  /** @type {boolean} */
  this.TrackActivate = undefined; // (boolean) (write)

  /**
   * Note: only do this when text has changed, otherwise it will flicker.
   *
   * @method
   *
   * @example
   * let text = "...";
   * if (tooltip.Text != text) {
   *    tooltip.Text = text;
   *    tooltip.Activate();
   * }
   */
  this.Activate = function () {}; // (void)

  /** @method */
  this.Deactivate = function () {}; // (void)

  /**
   * @param {number} type
   * @return {number}
   */
  this.GetDelayTime = function (type) {}; // (uint)

  /**
   * @param {number} type See Flags.js > Used in {@link FbTooltip#GetDelayTime} and {@link FbTooltip#SetDelayTime}
   * @param {number} time
   */
  this.SetDelayTime = function (type, time) {}; // (void)

  /**
   * @param {string} font_name
   * @param {number=} [font_size_px=12]
   * @param {number=} [font_style=0] See Flags.js > FontStyle
   */
  this.SetFont = function (font_name, font_size_px, font_style) {};

  /**
   * Use if you want multi-line tooltips.<br>
   * Use \n as a new line separator.
   *
   * @param {number} width
   *
   * @example
   * tooltip.SetMaxWidth(800);
   * tooltip.Text = "Line1\nLine2";
   */
  this.SetMaxWidth = function (width) {}; // (void)

  /**
   * Note: check that x, y positions have changed from the last invocation, otherwise it will flicker.<br>
   * Note 2: ensure that the tooltip does not overlap the mouse pointer, otherwise it will glitch out.
   *
   * @param {number} x
   * @param {number} y
   */
  this.TrackPosition = function (x, y) {}; // (void)
}
