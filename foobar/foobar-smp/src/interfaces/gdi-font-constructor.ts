import type { GdiFont } from "./gdi-font";

/**
 * @public
 */
export interface GdiFontConstructor {
  /**
   * Note: constructor may fail if font is not present.
   *
   * @param name - Font name
   * @param sizePx - Font size. See Helper.js \> Point2Pixel function for
   *   conversions.
   * @param style - Font style. Default `0`.
   */
  new (name: string, sizePx: number, style?: number): GdiFont;

  /**
   *
   */
  readonly prototype: GdiFont;
}
