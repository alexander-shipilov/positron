/**
 * Constructor may fail if font is not present.<br>
 *
 * Performance note: try caching and reusing `GdiFont` objects,
 * since the maximum amount of such objects is hard-limited by Windows.
 * `GdiFont` creation will fail after reaching this limit.
 *
 * @constructor
 * @param {string} name
 * @param {number} size_px See Helper.js > Point2Pixel function for conversions
 * @param {number=} [style=0] See Flags.js > FontStyle
 */
export function GdiFont(name, size_px, style) {
  /**
   * @type {number}
   * @readonly
   *
   * @example
   * console.log(my_font.Height); // 15
   */
  this.Height = undefined; //    (uint)(read)

  /**
   * @type {string}
   * @readonly
   *
   * @example
   * console.log(my_font.Name); // Segoe UI
   */
  this.Name = undefined; //    (string)(read)

  /**
   * @type {float}
   * @readonly
   *
   * @example
   * console.log(my_font.Size); // 12
   */
  this.Size = undefined; //    (float)(read)

  /**
   * See Flags.js > FontStyle for value interpretation.
   *
   * @type {number}
   * @readonly
   *
   * @example
   * console.log(my_font.Style);
   */
  this.Style = undefined; //    (uint)(read)
}
