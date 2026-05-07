import type { GdiBitmap } from "./gdi-bitmap";
import type { GdiFont } from "./gdi-font";

/**
 * The {@link Gdi} interface contains functions for working with graphics.
 * Most of them are wrappers for `Gdi` and `GdiPlus` methods.
 *
 * @public
 */
export interface Gdi {
  /**
   * The {@link Gdi.Font} creates an image.
   *
   * @param width -
   * @param height -
   */
  CreateImage(width: number, height: number): GdiBitmap;

  /**
   * The {@link Gdi.Font} method loads a font.
   *
   * Performance note: avoid using inside `on_paint`.
   * Performance note II: try caching and reusing {@link GdiFont} objects,
   * since the maximum amount of such objects is hard-limited by Windows.
   * {@link GdiFont} creation will fail after reaching this limit.
   *
   * @param name - Font name
   * @param sizePx - See Helpers.txt \> Point2Pixel function for conversions.
   * @param style - default 0, can be combined. See {@link FontStyle}
   *
   * @returns `null` if font not present.
   */
  Font(name: string, sizePx: number, style?: number): GdiFont | null;

  /**
   * The {@link Gdi.Image} method loads image from file.
   *
   * Performance note: consider using {@link Gdi.LoadImageAsync} or
   * {@link Gdi.LoadImageAsyncV2} if there are a lot of images to load or if
   * the image is big.
   *
   * ```ts
   *  const img = gdi.Image("e:\\images folder\\my_image.png");
   * ```
   *
   * @param path - Image path.
   *
   * @returns `null` if path doesn't exist or image fails to load.
   */
  Image(path: string): GdiBitmap | null;

  /**
   * The {@link Gdi.LoadImageAsync} method loads image from file asynchronously.
   *
   * See `samples/basic/LoadImageAsync.js`
   *
   * @param windowId - Unused. {@link Window.ID}
   * @param path - Image path.
   *
   * @returns An unique id which is the first argument on the
   *   `on_load_image_done` callback.
   */
  LoadImageAsync(windowId: number, path: string): number;

  /**
   * The {@link Gdi.LoadImageAsync} method loads image from file asynchronously.
   * Returns a `Promise` object, which will be resolved when image loading is
   * done.
   *
   * See `samples/basic/LoadImageAsyncV2.js`
   *
   * @param windowId - Unused. {@link Window.ID}
   * @param path - Image path.
   */
  LoadImageAsyncV2(windowId: number, path: string): Promise<GdiBitmap | null>;
}
