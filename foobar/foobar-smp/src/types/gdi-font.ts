/**
 * The {@link GdiFont} class creates a new `GDI` font object.
 *
 * @remarks
 * Performance note: try caching and reusing {@link GdiFont} objects, since the
 *   maximum amount of such objects is hard-limited by Windows. {@link GdiFont}
 *   creation will fail after reaching this limit.
 *
 * @public
 */
export declare class GdiFont {
  /**
   * The {@link GdiFont.Height} property contains font height in pixels.
   *
   * @example
   * ```ts
   *  console.log(myFont.Height);
   *  // >> 15
   * ```
   */
  public readonly Height: number;

  /**
   * The {@link GdiFont.Name} property contains font name.
   *
   * @example
   * ```ts
   *  console.log(myFont.Name);
   *  // >> Segoe UI
   * ```
   */
  public readonly Name: string;

  /**
   * The {@link GdiFont.Size} property contains font size in points.
   *
   * @example
   * ```ts
   *  console.log(myFont.Size);
   *  // >> 12
   * ```
   */
  public readonly Size: number;

  /**
   * The {@link GdiFont.Style} property contains font style.
   *
   * @remarks
   * See {@link FontStyle} for value interpretation.
   *
   * @example
   * ```ts
   *  console.log(myFont.Style);
   *  // >> 0
   * ```
   */
  public readonly Style: number;

  /**
   * @remarks
   * Note: Constructor may fail if the specified font is not present.
   *
   * @param name - Font name
   * @param sizePx - Font size. See `Helper.js > Point2Pixel` function for
   *   conversions. todo
   * @param style - Font style. Default `0`.
   */
  public constructor(name: string, sizePx: number, style?: number);
}
