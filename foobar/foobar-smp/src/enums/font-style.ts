/**
 * The {@link FontStyle} enumeration specifies the style of the typeface of a
 * font. Styles can be combined.
 *
 * Used by:
 *  - {@link Gdi.Font}
 *
 * @see http://msdn.microsoft.com/en-us/library/ms534124(VS.85).aspx
 *
 * @public
 */
export enum FontStyle {
  /**
   * Specifies normal weight or thickness of the typeface.
   */
  Regular = 0,

  /**
   * Specifies bold typeface. Bold is a heavier weight or thickness.
   */
  Bold = 1,

  /**
   * Specifies italic typeface, which produces a noticeable slant to the
   * vertical stems of the characters.
   */
  Italic = 2,

  /**
   * Specifies the typeface as both bold and italic.
   */
  BoldItalic = 3,

  /**
   * Specifies underline, which displays a line underneath the baseline of the
   * characters.
   */
  Underline = 4,

  /**
   * Specifies strikeout, which displays a horizontal line drawn through the
   * middle of the characters.
   */
  Strikeout = 8,
}
