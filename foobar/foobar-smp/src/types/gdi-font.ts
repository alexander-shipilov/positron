/**
 * The {@link GdiFont} interface represents a `GDI` font object.
 *
 * @remarks
 * Performance note: try caching and reusing {@link GdiFont} objects,
 *   since the maximum amount of such objects is hard-limited by Windows.
 *   {@link GdiFont} creation will fail after reaching this limit.
 *
 * @public
 */
export interface GdiFont {
  /**
   * The {@link GdiFont.Height} property contains font height in
   * pixels.
   *
   * @example
   * ```ts
   *  console.log(myFont.Height);
   *  // >> 15
   * ```
   */
  readonly Height: number;

  /**
   * The {@link GdiFont.Name} property contains font name.
   *
   * @example
   * ```ts
   *  console.log(myFont.Name);
   *  // >> Segoe UI
   * ```
   */
  readonly Name: string;

  /**
   * The {@link GdiFont.Size} property contains font size in points.
   *
   * @example
   * ```ts
   *  console.log(myFont.Size);
   *  // >> 12
   * ```
   */
  readonly Size: number;

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
  readonly Style: number;
}
