import type {
  InterpolationMode,
  SmoothingMode,
  TextRenderingHint,
} from "../enums";

import type { GdiBitmap } from "./gdi-bitmap";
import type { GdiFont } from "./gdi-font";
import type { GdiRawBitmap } from "./gdi-raw-bitmap";
import type { MeasureStringInfo } from "./measure-string-info";

/**
 * Typically used inside {@link Callbacks.on_paint}.
 *
 * Note: There are many different ways to get colors.
 * Use {@link Window.GetColourDUI} / {@link Window.GetColourCUI},
 * RGB function from Helpers.js, {@link Utils.ColourPicker}, etc.
 *
 * @public
 */
export interface GdiGraphics {
  /**
   * The {@link GdiGraphics.CalcTextHeight} method calculates text height for
   * {@link GdiGraphics.GdiDrawText}.
   *
   * Note: this will only calculate the text height of one line.
   *
   * @param text -
   * @param font -
   */
  CalcTextHeight(text: string, font: GdiFont): number;

  /**
   * The {@link GdiGraphics.CalcTextWidth} method calculates text width for
   * {@link GdiGraphics.GdiDrawText}.
   *
   * Note: When the `text` contains a kerning pair that is found in the
   * specified font, the return value will be larger than the actual drawn
   * width of the text. If accurate values are required, set `useExact` to
   * `true`.
   *
   * @param text - Text to calculate width.
   * @param font - Font.
   * @param useExact - Uses a slower, but more accurate method of calculating
   *   text width which accounts for kerning pairs. Default `false`.
   */
  CalcTextWidth(text: string, font: GdiFont, useExact?: boolean): number;

  /**
   * The {@link GdiGraphics.DrawEllipse} method draws an ellipse.
   *
   * @param x -
   * @param y -
   * @param width -
   * @param height -
   * @param lineWidth -
   * @param color -
   */
  DrawEllipse(
    x: number,
    y: number,
    width: number,
    height: number,
    lineWidth: number,
    color: number,
  ): void;

  /**
   * The {@link GdiGraphics.DrawImage} method draws an image.
   *
   * @param bitmap -
   * @param dstX -
   * @param dstY -
   * @param dstWidth -
   * @param dstHeight -
   * @param srcX -
   * @param srcY -
   * @param srcWidth -
   * @param srcHeight -
   * @param angle - Angle. Default `0`.
   * @param alpha - Alpha. Valid values 0-255. Default `255`.
   */
  DrawImage(
    bitmap: GdiBitmap,
    dstX: number,
    dstY: number,
    dstWidth: number,
    dstHeight: number,
    srcX: number,
    srcY: number,
    srcWidth: number,
    srcHeight: number,
    angle?: number,
    alpha?: number,
  ): void;

  /**
   * The {@link GdiGraphics.DrawLine} method draws a line.
   *
   * @param x1 -
   * @param y1 -
   * @param x2 -
   * @param y2 -
   * @param lineWidth -
   * @param color -
   */
  DrawLine(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    lineWidth: number,
    color: number,
  ): void;

  /**
   * The {@link GdiGraphics.DrawPolygon} method draws a polygon
   *
   * @param color - The color.
   * @param lineWidth - The line width.
   * @param points - An array of x, y co-ordinate pairs. Must be an even number
   *   in length.
   */
  DrawPolygon(color: number, lineWidth: number, points: number[]): void;

  /**
   * The {@link GdiGraphics.DrawRect} method draws a rectangle.
   *
   * @param x -
   * @param y -
   * @param width -
   * @param height -
   * @param lineWidth -
   * @param color -
   */
  DrawRect(
    x: number,
    y: number,
    width: number,
    height: number,
    lineWidth: number,
    color: number,
  ): void;

  /**
   * The {@link GdiGraphics.DrawRoundRect} method draws a rounded rectangle.
   *
   * @param x -
   * @param y -
   * @param width -
   * @param height -
   * @param arcWidth -
   * @param arcHeight -
   * @param lineWidth -
   * @param color -
   */
  DrawRoundRect(
    x: number,
    y: number,
    width: number,
    height: number,
    arcWidth: number,
    arcHeight: number,
    lineWidth: number,
    color: number,
  ): void;

  /**
   * The {@link GdiGraphics.DrawString} method draws a string.
   * Should be only used when {@link GdiGraphics.GdiDrawText} is not
   * applicable.
   *
   * @param str -
   * @param font - Font
   * @param color -
   * @param x - The x-coordinate of the top-left corner
   * @param y - The y-coordinate of the top-left corner
   * @param width - The width
   * @param height - The height
   * @param flags - Flags. Can be one or more of the {@link StringFormatFlags}.
   *   Default `0`
   */
  DrawString(
    str: string,
    font: GdiFont,
    color: number,
    x: number,
    y: number,
    width: number,
    height: number,
    flags?: number,
  ): void;

  /**
   * Return format:
   *  index | meaning
   *  [0] text line 1
   *  [1] width of text line 1 (in pixel)
   *  [2] text line 2
   *  [3] width of text line 2 (in pixel)
   *  ...
   *  [2n + 2] text line n
   *  [2n + 3] width of text line n (px)
   *
   * @param str -
   * @param font -
   * @param maxWidth -
   */
  EstimateLineWrap(
    str: string,
    font: GdiFont,
    maxWidth: number,
  ): (number | string)[];

  /**
   * The {@link GdiGraphics.DrawString} method draws a filled ellipse.
   *
   * @param x -
   * @param y -
   * @param width -
   * @param height -
   * @param color -
   */
  FillEllipse(
    x: number,
    y: number,
    width: number,
    height: number,
    color: number,
  ): void;

  /**
   * The {@link GdiGraphics.DrawString} method draws gradient filled rectangle.
   *
   * Note: This may appear buggy depending on rectangle size.
   * The easiest fix is to adjust the "angle" by a degree or two.
   *
   * @param x - Rectangle x-position
   * @param y - Rectangle y-position
   * @param width - Rectangle width
   * @param height - Rectangle height
   * @param angle - Gradient angle
   * @param color1 - Gradient color 1
   * @param color2 - Gradient color 2
   * @param focus - Specify where the centred color will be at its highest
   *   intensity. Valid values between `0` and `1`. Default `1.0`.
   */
  FillGradRect(
    x: number,
    y: number,
    width: number,
    height: number,
    angle: number,
    color1: number,
    color2: number,
    focus?: number,
  ): void;

  /**
   * The {@link GdiGraphics.DrawString} method draws filled polygon.
   *
   * @param color -
   * @param fillMode - 0 alternate, 1 winding.
   * @param points - An array of x, y co-ordinate pairs. Must be an even number
   *   in length.
   */
  FillPolygon(color: number, fillMode: 0 | 1, points: number[]): void;

  /**
   * The {@link GdiGraphics.FillRoundRect} method draws a filled rounded
   * rectangle.
   *
   * @param x -
   * @param y -
   * @param width -
   * @param height -
   * @param arcWidth -
   * @param arcHeight -
   * @param color -
   */
  FillRoundRect(
    x: number,
    y: number,
    width: number,
    height: number,
    arcWidth: number,
    arcHeight: number,
    color: number,
  ): void;

  /**
   * The {@link GdiGraphics.FillSolidRect} method draws a filled rectangle.
   *
   * @param x -
   * @param y -
   * @param width -
   * @param height -
   * @param color -
   */
  FillSolidRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: number,
  ): void;

  /**
   * The {@link GdiGraphics.GdiAlphaBlend} method draws a bitmap with
   * alpha-blending.
   *
   * @param bitmap -
   * @param dstX - Destination x-position
   * @param dstY - Destination y-position
   * @param dstWidth - Destination width
   * @param dstHeight - Destination height
   * @param srcX - Source x-position
   * @param srcY - Source y-position
   * @param srcWidth - Source width
   * @param srcHeight - Source height
   * @param alpha - Alpha. Valid values 0-255. Default `255`.
   */
  GdiAlphaBlend(
    bitmap: GdiRawBitmap,
    dstX: number,
    dstY: number,
    dstWidth: number,
    dstHeight: number,
    srcX: number,
    srcY: number,
    srcWidth: number,
    srcHeight: number,
    alpha?: number,
  ): void;

  /**
   * The {@link GdiGraphics.GdiDrawBitmap} method draws a bitmap.
   *
   * Performance note: Always faster than {@link GdiGraphics.DrawImage}, does
   * not support alpha channel.
   *
   * @param bitmap -
   * @param dstX - Destination x-position
   * @param dstY - Destination y-position
   * @param dstWidth - Destination width
   * @param dstHeight - Destination height
   * @param srcX - Source x-position
   * @param srcY - Source y-position
   * @param srcWidth - Source width
   * @param srcHeight - Source height
   */
  GdiDrawBitmap(
    bitmap: GdiRawBitmap,
    dstX: number,
    dstY: number,
    dstWidth: number,
    dstHeight: number,
    srcX: number,
    srcY: number,
    srcWidth: number,
    srcHeight: number,
  ): void;

  /**
   * The {@link GdiGraphics.GdiDrawText} method draws a text.
   *
   * Provides faster and better rendering than
   * {@link GdiGraphics.DrawString}.
   *
   * Do not use this to draw text on transparent background or
   * with {@link GdiGraphics} other than the one passed in
   * {@link Callbacks.on_paint} callback: this will result in
   * visual artifacts caused by ClearType hinting.
   *
   * Use {@link GdiGraphics.DrawString} instead in such cases.
   *
   * To calculate text dimensions use {@link GdiGraphics.CalcTextHeight},
   * {@link GdiGraphics.CalcTextWidth}.
   *
   * Note: uses special rules for `&` character by default, which consumes the
   * `&` and causes the next character to be underscored. This behaviour can be
   * changed (or disabled) via `format` parameter.
   *
   * @param text - Text
   * @param font - Font
   * @param color -
   * @param x -
   * @param y -
   * @param width -
   * @param height -
   * @param format - The method of formatting the text.
   *   Can be one or more of the {@link TextFormat}. Default `0`.
   */
  GdiDrawText(
    text: string,
    font: GdiFont,
    color: number,
    x: number,
    y: number,
    width: number,
    height: number,
    format?: number,
  ): void;

  /**
   * The {@link GdiGraphics.MeasureString} method measures the extent of the
   * string in the specified font, format, and layout rectangle.
   *
   * @param str -
   * @param font - Font
   * @param x - The x-coordinate of the top-left corner
   * @param y - The y-coordinate of the top-left corner
   * @param width - The width
   * @param height - The height
   * @param flags - Flags. Can be one or more of the {@link StringFormatFlags}.
   *   Default `0`.
   */
  MeasureString(
    str: string,
    font: GdiFont,
    x: number,
    y: number,
    width: number,
    height: number,
    flags?: number,
  ): MeasureStringInfo;

  /**
   * The {@link GdiGraphics.SetInterpolationMode} method sets the interpolation
   * mode. The interpolation mode determines the algorithm that is used when
   * images are scaled or rotated.
   *
   * @param mode - Interpolation mode. Default {@link
   *   InterpolationMode.Default}.
   */
  SetInterpolationMode(mode?: InterpolationMode): void;

  /**
   * The {@link GdiGraphics.SetSmoothingMode} method sets the rendering
   * quality.
   *
   * @param mode - Smoothing mode. Default {@link SmoothingMode.Default}.
   */
  SetSmoothingMode(mode: SmoothingMode): void;

  /**
   * The {@link GdiGraphics.SetTextRenderingHint} method  sets the text
   * rendering hint.
   *
   * @param mode - Text rendering hint. Default
   *   `TextRenderingHint.SystemDefault`.
   */
  SetTextRenderingHint(mode: TextRenderingHint): void;
}
