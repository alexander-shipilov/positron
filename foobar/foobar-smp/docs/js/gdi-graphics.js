/**
 * Typically used inside `on_paint`.<br>
 *
 * Note: there are many different ways to get colours:
 * window.GetColourDUI/window.GetColourCUI,
 * RGB function from Helpers.js, utils.ColourPicker and
 * etc.
 *
 * @constructor
 * @hideconstructor
 */
export function GdiGraphics() {
  /**
   * Calculates text height for {@link GdiGraphics#GdiDrawText}.<br>
   * Note: this will only calculate the text height of one line.
   *
   * @param {string} str
   * @param {GdiFont} font
   * @return {number}
   */
  this.CalcTextHeight = function (str, font) {}; // (uint)

  /**
   * Calculates text width for {@link GdiGraphics#GdiDrawText}.
   *
   * Note: When the str contains a kerning pair that is found in the specified
   * font, the return value will be larger than the actual drawn width of the
   * text. If accurate values are required, set use_exact to true.
   *
   * @param {string} str
   * @param {GdiFont} font
   * @param {boolean=} [use_exact=false] Uses a slower, but more accurate method of calculating text width which accounts for kerning pairs.
   * @return {number}
   */
  this.CalcTextWidth = function (str, font, use_exact) {}; // (uint)

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} w
   * @param {number} h
   * @param {number} line_width
   * @param {number} colour
   */
  this.DrawEllipse = function (x, y, w, h, line_width, colour) {}; // (void)

  /**
   * @param {GdiBitmap} img
   * @param {number} dstX
   * @param {number} dstY
   * @param {number} dstW
   * @param {number} dstH
   * @param {number} srcX
   * @param {number} srcY
   * @param {number} srcW
   * @param {number} srcH
   * @param {float=} [angle=0]
   * @param {number=} [alpha=255] Valid values 0-255.
   */
  this.DrawImage = function (
    img,
    dstX,
    dstY,
    dstW,
    dstH,
    srcX,
    srcY,
    srcW,
    srcH,
    angle,
    alpha,
  ) {}; // (void) [, angle][, alpha]

  /**
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @param {number} line_width
   * @param {number} colour
   */
  this.DrawLine = function (x1, y1, x2, y2, line_width, colour) {}; // (void)

  /**
   * @param {number} colour
   * @param {number} line_width
   * @param {Array<Array<number>>} points
   */
  this.DrawPolygon = function (colour, line_width, points) {}; // (void)

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} w
   * @param {number} h
   * @param {number} line_width
   * @param {number} colour
   */
  this.DrawRect = function (x, y, w, h, line_width, colour) {}; // (void)

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} w
   * @param {number} h
   * @param {number} arc_width
   * @param {number} arc_height
   * @param {number} line_width
   * @param {number} colour
   */
  this.DrawRoundRect = function (
    x,
    y,
    w,
    h,
    arc_width,
    arc_height,
    line_width,
    colour,
  ) {}; // (void)

  /**
   * Should be only used when {@link GdiGraphics#GdiDrawText} is not applicable.
   *
   * @param {string} str
   * @param {GdiFont} font
   * @param {number} colour
   * @param {number} x
   * @param {number} y
   * @param {number} w
   * @param {number} h
   * @param {number=} [flags=0] See Flags.js > StringFormatFlags
   */
  this.DrawString = function (str, font, colour, x, y, w, h, flags) {}; // (void) [, flags]

  /**
   * @param {string} str
   * @param {GdiFont} font
   * @param {number} max_width
   * @return {Array<Array>}
   *    index | meaning <br>
   *    [0] text line 1 <br>
   *    [1] width of text line 1 (in pixel) <br>
   *    [2] text line 2 <br>
   *    [3] width of text line 2 (in pixel) <br>
   *    ... <br>
   *    [2n + 2] text line n <br>
   *    [2n + 3] width of text line n (px)
   */
  this.EstimateLineWrap = function (str, font, max_width) {}; // (Array)

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} w
   * @param {number} h
   * @param {number} colour
   */
  this.FillEllipse = function (x, y, w, h, colour) {}; // (void)

  /**
   * Note: this may appear buggy depending on rectangle size. The easiest fix is
   * to adjust the "angle" by a degree or two.
   *
   * @param {number} x
   * @param {number} y
   * @param {number} w
   * @param {number} h
   * @param {float} angle
   * @param {number} colour1
   * @param {number} colour2
   * @param {float} [focus=1.0] Specify where the centred colour will be at its highest intensity. Valid values between 0 and 1.
   */
  this.FillGradRect = function (x, y, w, h, angle, colour1, colour2, focus) {}; // (void) [, focus]

  /**
   * @param {number} colour
   * @param {number} fillmode 0 alternate, 1 winding.
   * @param {Array<Array<number>>} points
   */
  this.FillPolygon = function (colour, fillmode, points) {}; // (void)

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} w
   * @param {number} h
   * @param {number} arc_width
   * @param {number} arc_height
   * @param {number} colour
   */
  this.FillRoundRect = function (x, y, w, h, arc_width, arc_height, colour) {}; // (void)

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} w
   * @param {number} h
   * @param {number} colour
   */
  this.FillSolidRect = function (x, y, w, h, colour) {}; // (void)

  /**
   * @param {GdiRawBitmap} img
   * @param {number} dstX
   * @param {number} dstY
   * @param {number} dstW
   * @param {number} dstH
   * @param {number} srcX
   * @param {number} srcY
   * @param {number} srcW
   * @param {number} srcH
   * @param {number=} [alpha=255] Valid values 0-255.
   */
  this.GdiAlphaBlend = function (
    img,
    dstX,
    dstY,
    dstW,
    dstH,
    srcX,
    srcY,
    srcW,
    srcH,
    alpha,
  ) {}; // (void) [, alpha]

  /**
   * Always faster than {@link GdiGraphics#DrawImage}, does not support alpha channel.
   *
   * @param {GdiRawBitmap} img
   * @param {number} dstX
   * @param {number} dstY
   * @param {number} dstW
   * @param {number} dstH
   * @param {number} srcX
   * @param {number} srcY
   * @param {number} srcW
   * @param {number} srcH
   */
  this.GdiDrawBitmap = function (
    img,
    dstX,
    dstY,
    dstW,
    dstH,
    srcX,
    srcY,
    srcW,
    srcH,
  ) {}; // (void)

  /**
   * Provides faster and better rendering than {@link GdiGraphics#DrawString}.<br>
   * <br>
   * Do not use this to draw text on transparent background or
   * with GdiGraphics other than the one passed in {@link module:callbacks~on_paint on_paint} callback:
   * this will result in visual artifacts caused by ClearType hinting.<br>
   * Use {@link GdiGraphics#DrawString} instead in such cases.<br>
   * <br>
   * To calculate text dimensions use {@link GdiGraphics#CalcTextHeight}, {@link GdiGraphics#CalcTextWidth}.<br>
   * <br>
   * Note: uses special rules for `&` character by default, which consumes the `&` and causes the next character to be underscored.
   * This behaviour can be changed (or disabled) via `format` parameter.
   *
   * @param {string} str
   * @param {GdiFont} font
   * @param {number} colour
   * @param {number} x
   * @param {number} y
   * @param {number} w
   * @param {number} h
   * @param {number=} [format=0] See Flags.js > DT_*
   */
  this.GdiDrawText = function (str, font, colour, x, y, w, h, format) {};

  /**
   * Calculates text dimensions for {@link GdiGraphics#DrawString}.
   *
   * @param {string} str
   * @param {GdiFont} font
   * @param {number} x
   * @param {number} y
   * @param {number} w
   * @param {number} h
   * @param {number=} [flags=0] See Flags.js > StringFormatFlags
   * @return {MeasureStringInfo}
   */
  this.MeasureString = function (str, font, x, y, w, h, flags) {}; // (MeasureStringInfo) [, flags]

  /**
   * @constructor
   * @hideconstructor
   *
   * @example
   * include(`${fb.ComponentPath}docs\\Flags.js`);
   * include(`${fb.ComponentPath}docs\\Helpers.js`);
   *
   * let sf = StringFormat(StringAlignment.Near, StringAlignment.Near);
   * let text = utils.ReadTextFile("z:\\info.txt");
   * let font = window.GetFontDUI(0);
   *
   * function on_paint(gr) {
   *     gr.DrawString(text, font, RGB(255, 0, 0), 0, 0, window.Width, window.Height, sf);
   *     let temp = gr.MeasureString(text, font, 0, 0, window.Width, 10000, sf);
   *     // If we want to calculate height, we must set the height to be far larger than what
   *     // the text could possibly be.
   *
   *     console.log(temp.Height); // 2761.2421875 // far larger than my panel height!
   *     console.log(temp.Chars); // 7967
   * }
   */
  function MeasureStringInfo() {
    /**
     * @type {number}
     * @readonly
     */
    this.Chars = undefined; // (uint) (read)

    /**
     * @type {float}
     * @readonly
     */
    this.Height = undefined; // (float) (read)

    /**
     * @type {number}
     * @readonly
     */
    this.Lines = undefined; // (uint) (read)

    /**
     * @type {float}
     * @readonly
     */
    this.X = undefined; // (float) (read)

    /**
     * @type {float}
     * @readonly
     */
    this.Y = undefined; // (float) (read)

    /**
     * @type {float}
     * @readonly
     */
    this.Width = undefined; // (float) (read)
  }

  /**
   * @param {number=} [mode=0] See Flags.js > InterpolationMode
   */
  this.SetInterpolationMode = function (mode) {}; // (void)

  /**
   * @param {number=} [mode=0] See Flags.js > SmoothingMode
   */
  this.SetSmoothingMode = function (mode) {}; // (void)

  /**
   * @param {number=} [mode=0] See Flags.js > TextRenderingHint
   */
  this.SetTextRenderingHint = function (mode) {}; // (void)
}
