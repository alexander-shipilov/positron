/**
 * @constructor
 * @param {GdiBitmap} arg
 */
export function GdiBitmap(arg) {
  /**
   * @type {number}
   * @readonly
   */
  this.Height = undefined; // (uint) (read)

  /**
   * @type {number}
   * @readonly
   */
  this.Width = undefined; // (uint) (read)

  /**
   * @param {number} alpha Valid values 0-255.
   * @return {GdiBitmap}
   */
  this.ApplyAlpha = function (alpha) {}; // (GdiBitmap)

  /**
   * Changes will be saved in the current bitmap.
   *
   * @param {GdiBitmap} img
   *
   * @example <caption>Blur image<caption>
   * // See `samples/basic/Apply Mask.js`
   */
  this.ApplyMask = function (img) {}; // (boolean)

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} w
   * @param {number} h
   * @return {GdiBitmap}
   */
  this.Clone = function (x, y, w, h) {}; // (GdiBitmap)

  /**
   * Create a DDB bitmap from GdiBitmap, which is used in {@link GdiGraphics#GdiDrawBitmap}
   *
   * @return {GdiRawBitmap}
   */
  this.CreateRawBitmap = function () {}; // (GdiRawBitmap)

  /**
   * @param {number} max_count
   * @return {Array<number>}
   */
  this.GetColourScheme = function (max_count) {}; // (Array)

  /**
   * Returns a JSON array in string form so you need to use JSON.parse() on the result.<br>
   * Each entry in the array is an object which contains colour and frequency values.<br>
   * Uses a different method for calculating colours than {@link GdiBitmap#GetColourScheme}.<br>
   * Image is automatically resized during processing for performance reasons so there's no
   * need to resize before calling the method.
   *
   * @param {number} max_count
   * @return {string}
   *
   * @example
   * // See docs\Helpers.js for "toRGB" function.
   * img = ... // use utils.GetAlbumArtV2 / gdi.Image / etc
   * colours = JSON.parse(img.GetColourSchemeJSON(5));
   * console.log(colours[0].col); // -4194304
   * console.log(colours[0].freq); // 0.34
   * console.log(toRGB(colours[0].col)); // [192, 0, 0]
   */
  this.GetColourSchemeJSON = function (max_count) {}; // (string)

  /**
   * Note: don't forget to use {@link GdiBitmap#ReleaseGraphics} after work on GdiGraphics is done!
   *
   * @return {GdiGraphics}
   */
  this.GetGraphics = function () {};

  /**
   * Inverts the colours in a bitmap, to create a negative image.
   * i.e. White becomes black, black becomes white, etc.
   * @return {GdiBitmap}
   */
  this.InvertColours = function () {}; // (GdiBitmap)

  /**
   * @param {GdiGraphics} gr
   */
  this.ReleaseGraphics = function (gr) {}; // (GdiGraphics)

  /**
   * @param {number} w
   * @param {number} h
   * @param {number=} [mode=0] See Flags.js > InterpolationMode
   * @return {GdiBitmap}
   */
  this.Resize = function (w, h, mode) {}; // (GdiBitmap) [, mode]

  /**
   * Changes will be saved in the current bitmap.
   *
   * @param {number} mode See Flags.js > RotateFlipType
   */
  this.RotateFlip = function (mode) {}; // (void)

  /**
   * @param {string} path Full path including file extension. The parent folder must already exist.
   * @param {string=} [format='image/png']
   *      "image/png"<br>
   *      "image/bmp"<br>
   *      "image/jpeg"<br>
   *      "image/gif"<br>
   *      "image/tiff"
   * @return {boolean}
   *
   * @example
   * let img = utils.GetAlbumArtEmbedded(fb.GetFocusItem().RawPath, 0);
   * if (img) {
   *     img.SaveAs("D:\\export.jpg", "image/jpeg");
   * }
   */
  this.SaveAs = function (path, format) {}; // (boolean) [, format]

  /**
   * Changes will be saved in the current bitmap.
   *
   * @param {number} radius Valid values 2-254.
   *
   * @example <caption>Blur image<caption>
   * // `samples/basic/StackBlur (image).js`
   *
   * @example <caption>Blur text<caption>
   * // `samples/basic/StackBlur (text).js`
   */
  this.StackBlur = function (radius) {}; // (void)
}
