/**
 * The {@link GdiFont} class create a new GDI font object.
 *
 * Performance note: try caching and reusing {@link GdiFont} objects,
 * since the maximum amount of such objects is hard-limited by Windows.
 * {@link GdiFont} creation will fail after reaching this limit.
 *
 * @public
 */
export declare class GdiFont {
  /**
   * The {@link GdiFont.Height} property contains font height in pixels.
   *
   * ```ts
   *  console.log(myFont.Height);
   *  // >> 15
   * ```
   */
  readonly Height: number;

  /**
   * The {@link GdiFont.Name} property contains font name.
   *
   * ```ts
   *  console.log(myFont.Name);
   *  // >> Segoe UI
   * ```
   */
  readonly Name: string;

  /**
   * The {@link GdiFont.Size} property contains font size in points.
   *
   * ```ts
   *  console.log(myFont.Size);
   *  // >> 12
   * ```
   */
  readonly Size: number;

  /**
   * The {@link GdiFont.Style} property contains font style.
   * See {@link FontStyle} for value interpretation.
   *
   * ```ts
   *  console.log(myFont.Style);
   *  // >> 0
   * ```
   */
  readonly Style: number;

  /**
   * Note: constructor may fail if font is not present.
   *
   * @param name - Font name
   * @param sizePx - Font size. See Helper.js \> Point2Pixel function for
   *   conversions.
   * @param style - Font style. Default `0`.
   */
  constructor(name: string, sizePx: number, style?: number);
}
