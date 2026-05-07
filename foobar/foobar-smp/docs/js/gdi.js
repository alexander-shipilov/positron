/**
 * Functions for working with graphics. Most of them are wrappers for Gdi and GdiPlus methods.
 *
 * @namespace
 */
export let gdi = {
  /**
   * @param {number} w
   * @param {number} h
   * @return {GdiBitmap}
   */
  CreateImage(w, h) {}, // (GdiBitmap)

  /**
   * Performance note: avoid using inside `on_paint`.<br>
   * Performance note II: try caching and reusing `GdiFont` objects,
   * since the maximum amount of such objects is hard-limited by Windows.
   * `GdiFont` creation will fail after reaching this limit.
   *
   * @param {string} name
   * @param {number} size_px See Helper.js > Point2Pixel function for conversions
   * @param {number=} [style=0] See Flags.js > FontStyle
   * @return {?GdiFont} null, if font is not present.
   */
  Font(name, size_px, style) {}, // (GdiFont) [, style]

  /**
   * Load image from file.<br>
   * <br>
   * Performance note: consider using {@link gdi.LoadImageAsync} or {@link gdi.LoadImageAsyncV2} if there are a lot of images to load
   * or if the image is big.
   *
   * @param {string} path
   * @return {?GdiBitmap} null, if image failed to load.
   *
   * @example
   * let img = gdi.Image('e:\\images folder\\my_image.png');
   */
  Image(path) {}, // (GdiBitmap)

  /**
   * Load image from file asynchronously.
   *
   * @param {number} window_id unused
   * @param {string} path
   * @return {number} a unique id, which is used in {@link module:callbacks~on_load_image_done on_load_image_done}.
   *
   * @example
   * // See `samples/basic/LoadImageAsync.js`
   */
  LoadImageAsync(window_id, path) {}, // (uint)

  /**
   * Load image from file asynchronously.
   * Returns a `Promise` object, which will be resolved when image loading is done.
   *
   * @param {number} window_id unused
   * @param {string} path
   * @return {Promise.<?GdiBitmap>}
   *
   * @example
   * // See `samples/basic/LoadImageAsyncV2.js`
   */
  LoadImageAsyncV2(window_id, path) {},
};
