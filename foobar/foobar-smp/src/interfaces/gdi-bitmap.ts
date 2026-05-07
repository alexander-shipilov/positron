import type { BitmapFormat, InterpolationMode, RotateFlipType } from "../enums";

import type { GdiGraphics } from "./gdi-graphics";
import type { GdiRawBitmap } from "./gdi-raw-bitmap";

/**
 * @public
 */
export interface GdiBitmap {
  /**
   * The {@link GdiBitmap.Height} property contains bitmap height
   */
  readonly Height: number;

  /**
   * The {@link GdiBitmap.Width} property contains bitmap width.
   */
  readonly Width: number;

  /**
   * The {@link GdiBitmap.ApplyAlpha} method applies alpha channel.
   *
   * @param alpha - Valid values 0-255.
   */
  ApplyAlpha(alpha: number): GdiBitmap;

  /**
   * The {@link GdiBitmap.ApplyMask} method applies mask.
   * Changes will be saved in the current bitmap.
   *
   * @param mask - Mask bitmap. Must be the same size as current instance.
   */
  ApplyMask(mask: GdiBitmap): boolean;

  /**
   * The {@link GdiBitmap.Clone} method clones bitmap.
   *
   * @param x -
   * @param y -
   * @param width -
   * @param height -
   */
  Clone(x: number, y: number, width: number, height: number): GdiBitmap;

  /**
   * The {@link GdiBitmap.ApplyMask} method creates a Device-Dependent Bitmap
   * from current {@link GdiBitmap}, which is used in
   * {@link GdiGraphics.GdiDrawBitmap}
   */
  CreateRawBitmap(): GdiRawBitmap;

  /**
   * @param maxCount -
   */
  GetColourScheme(maxCount: number): number[];

  /**
   * The {@link GdiBitmap.GetColourSchemeJSON} method returns a JSON array in
   * string form so you need to use `JSON.parse()` on the result. Each entry in
   * the array is an object which contains colour and frequency values.
   *
   * Uses a different method for calculating colours than
   * {@link GdiBitmap.GetColourScheme}.
   *
   * Image is automatically resized during processing for performance reasons
   * so there's no need to resize before calling the method.
   *
   * ```ts
   *  // See docs\Helpers.js for "toRGB" function.
   *  const img = ... // use utils.GetAlbumArtV2 / gdi.Image / etc.
   *  const colours = JSON.parse(img.GetColourSchemeJSON(5));
   *
   *  console.log(colours[0].col);
   *  // -4194304
   *
   *  console.log(colours[0].freq);
   *  // 0.34
   *
   *  console.log(toRGB(colours[0].col));
   *  // [192, 0, 0]
   * ```
   *
   * @param maxCount -
   */
  GetColourSchemeJSON(maxCount: number): string;

  /**
   * Note: Don't forget to use {@link GdiBitmap.ReleaseGraphics} after
   * operations on {@link GdiGraphics} interface is done.
   */
  GetGraphics(): GdiGraphics;

  /**
   * The {@link GdiBitmap.InvertColours} method inverts the colours in a
   * bitmap, to create a negative image. i.e. white becomes black, black
   * becomes white, etc.
   */
  InvertColours(): GdiBitmap;

  /**
   * @param graphics -
   */
  ReleaseGraphics(graphics: GdiGraphics): void;

  /**
   * @param width -
   * @param height -
   * @param mode - Default {@link InterpolationMode.Default}.
   */
  Resize(width: number, height: number, mode?: InterpolationMode): GdiBitmap;

  /**
   * The {@link GdiBitmap.RotateFlip} method rotates / flips image.
   * Changes will be saved in the current bitmap.
   *
   * @param mode -
   */
  RotateFlip(mode: RotateFlipType): void;

  /**
   * ```ts
   *  const img = utils.GetAlbumArtEmbedded(fb.GetFocusItem().RawPath, 0);
   *
   *  if (img) {
   *    img.SaveAs("D:\\export.jpg", BitmapFormat.Png);
   *  }
   * ```
   *
   * @param path - Full path including file extension.
   *   The parent folder must already exist.
   * @param format - Format. Default {@link BitmapFormat.Png}
   */
  SaveAs(path: string, format?: BitmapFormat): boolean;

  /**
   * The {@link GdiBitmap.StackBlur} method applies blur effect.
   * Changes will be saved in the current bitmap.
   *
   * todo: See
   *    samples\\basic\\StackBlur (image).txt,
   *    samples\\basic\\StackBlur (text).txt
   *
   * @param radius - Valid values 2-254.
   */
  StackBlur(radius: number): void;
}
