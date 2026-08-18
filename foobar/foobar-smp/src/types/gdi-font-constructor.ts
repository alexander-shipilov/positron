import type { GdiFont } from "./gdi-font";

/**
 * The {@link GdiFontConstructor} interface represents a type of the global
 * `GdiFont` constructor.
 *
 * @public
 */
export interface GdiFontConstructor {
  /**
   * @remarks
   * Note: Constructor may fail if the specified font is not present.
   *
   * @param name - Font name
   * @param sizePx - Font size. See `Helper.js > Point2Pixel` function for
   *   conversions. todo
   * @param style - Font style. Default `0`.
   */
  new (name: string, sizePx: number, style?: number): GdiFont;
}
