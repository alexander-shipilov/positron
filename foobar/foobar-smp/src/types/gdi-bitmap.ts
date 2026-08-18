import type { BitmapFormat, InterpolationMode, RotateFlipType } from "../enums";

import type { GdiGraphics } from "./gdi-graphics";
import type { GdiRawBitmap } from "./gdi-raw-bitmap";

/**
 * The {@link GdiBitmap} interface represents a `GDI` bitmap object.
 *
 * @public
 */
export interface GdiBitmap {
  /**
   * The {@link GdiBitmap.Height} property contains bitmap height of
   * the current {@link GdiBitmap} object.
   */
  readonly Height: number;

  /**
   * The {@link GdiBitmap.Width} property contains bitmap width of the
   * current {@link GdiBitmap} object.
   */
  readonly Width: number;

  /**
   * The {@link GdiBitmap.ApplyAlpha} method applies alpha channel to
   * the current {@link GdiBitmap} object.
   *
   * @remarks
   * Note: Changes will be saved in the current bitmap.
   *
   * @param alpha - Valid values 0-255.
   */
  ApplyAlpha(alpha: number): GdiBitmap;

  /**
   * The {@link GdiBitmap.ApplyMask} method applies mask to the current
   * {@link GdiBitmap} object.
   *
   * @remarks
   * Note: Changes will be saved in the current bitmap.
   *
   * @param mask - Mask bitmap. Must be the same size as current instance.
   */
  ApplyMask(mask: GdiBitmap): boolean;

  /**
   * The {@link GdiBitmap.Clone} method clones the current
   * {@link GdiBitmap} object.
   *
   * @param x -
   * @param y -
   * @param width -
   * @param height -
   */
  Clone(x: number, y: number, width: number, height: number): GdiBitmap;

  /**
   * The {@link GdiBitmap.CreateRawBitmap} method creates a
   * Device-Dependent Bitmap from the current {@link GdiBitmap}
   * object, which is used in
   * {@link GdiGraphics.GdiDrawBitmap}
   */
  CreateRawBitmap(): GdiRawBitmap;

  /**
   * @param maxCount -
   */
  GetColourScheme(maxCount: number): number[];

  /**
   * The {@link GdiBitmap.GetColourSchemeJSON} method returns color
   * scheme of the current {@link GdiBitmap} object as JSON array in
   * string form.
   *
   * @remarks
   * You need to use `JSON.parse()` on the result. Each entry in the
   *   array is an object which contains colour (`col`) and frequency (`freq`)
   *   values.
   *
   * Note: The {@link GdiBitmap.GetColourSchemeJSON} method uses a
   *   different method for calculating colours than
   *   {@link GdiBitmap.GetColourScheme}.
   *
   * Note: Image is automatically resized during processing for performance
   *   reasons so there's no need to resize before calling the method.
   *
   * @example
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
   * The {@link GdiBitmap.GetGraphics} returns a {@link GdiGraphics}
   * object.
   *
   * @remarks
   * Note: Don't forget to use {@link GdiBitmap.ReleaseGraphics} after
   *   operations on {@link GdiGraphics} interface is done.
   */
  GetGraphics(): GdiGraphics;

  /**
   * The {@link GdiBitmap.InvertColours} method inverts the colours of
   * the current {@link GdiBitmap} object, to create a negative image.
   * i.e. white becomes black, black becomes white, etc.
   */
  InvertColours(): GdiBitmap;

  /**
   * The {@link GdiBitmap.ReleaseGraphics} releases the specified
   * {@link GdiGraphics} object.
   *
   * @param graphics -
   */
  ReleaseGraphics(graphics: GdiGraphics): void;

  /**
   * The {@link GdiBitmap.Resize} resizes the current
   * {@link GdiBitmap} object.
   *
   * @param width -
   * @param height -
   * @param mode - Default {@link InterpolationMode.Default}.
   */
  Resize(width: number, height: number, mode?: InterpolationMode): GdiBitmap;

  /**
   * The {@link GdiBitmap.RotateFlip} method rotates / flips current
   * {@link GdiBitmap} object.
   *
   * @remarks
   * Note: Changes will be saved in the current bitmap.
   *
   * @param mode -
   */
  RotateFlip(mode: RotateFlipType): void;

  /**
   * The {@link GdiBitmap.RotateFlip} method saves current
   * {@link GdiBitmap} object to the file.
   *
   * @remarks
   * Note: The parent folder must already exist.
   *
   * @example
   * ```ts
   *  const img = utils.GetAlbumArtEmbedded(fb.GetFocusItem().RawPath, 0);
   *
   *  if (img) {
   *    img.SaveAs("D:\\export.jpg", BitmapFormat.Png);
   *  }
   * ```
   *
   * @param path - Full path including file extension.
   * @param format - Format. Default {@link BitmapFormat.Png}
   */
  SaveAs(path: string, format?: BitmapFormat): boolean;

  /**
   * The {@link GdiBitmap.StackBlur} method applies blur effect to the
   * current
   * {@link GdiBitmap} object.
   *
   * @remarks
   * Note: Changes will be saved in the current bitmap.
   *
   * @remarks
   * todo: See
   *   samples\\basic\\StackBlur (image).txt,
   *   samples\\basic\\StackBlur (text).txt
   *
   * @param radius - Valid values 2-254.
   */
  StackBlur(radius: number): void;
}
