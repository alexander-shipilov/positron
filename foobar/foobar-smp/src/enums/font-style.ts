/**
 * The {@link FontStyle} enum represents the style of the typeface of a
 * font. Styles can be combined.
 *
 * @remarks
 * The {@link FontStyle} enum is used by:
 * {@link GdiUtils.Font}
 *
 * @see http://msdn.microsoft.com/en-us/library/ms534124(VS.85).aspx
 *
 * @public
 */
export enum FontStyle {
  /**
   * Specifies normal weight or thickness of the typeface.
   */
  Regular = 0x0,

  /**
   * Specifies bold typeface. Bold is a heavier weight or thickness.
   */
  Bold = 0x1,

  /**
   * Specifies italic typeface, which produces a noticeable slant to the
   * vertical stems of the characters.
   */
  Italic = 0x2,

  /**
   * Specifies the typeface as both bold and italic.
   */
  BoldItalic = 0x3,

  /**
   * Specifies underline, which displays a line underneath the baseline of the
   * characters.
   */
  Underline = 0x4,

  /**
   * Specifies strikeout, which displays a horizontal line drawn through the
   * middle of the characters.
   */
  Strikeout = 0x8,
}
