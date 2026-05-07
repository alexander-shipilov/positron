/**
 * The {@link TextRenderingHint} enumeration specifies the process used to
 * render text. The process affects the quality of the text. This enumeration
 * is used by {@link GdiGraphics.SetTextRenderingHint}
 *
 * The quality associated with each process varies according to the
 * circumstances.
 *
 * {@link TextRenderingHint.ClearTypeGridFit} provides the best quality for
 * most LCD monitors and relatively small font sizes.
 *
 * {@link TextRenderingHint.AntiAlias} provides the best quality for rotated
 * text. Generally, a process that produces higher quality text is slower than
 * a process that produces lower quality text.
 *
 * @see http://msdn.microsoft.com/en-us/library/ms534404(VS.85).aspx
 *
 * @public
 */
export enum TextRenderingHint {
  /**
   * Specifies that a character is drawn using the currently selected system
   * font smoothing mode (also called a rendering hint).
   */
  SystemDefault = 0,

  /**
   * Specifies that a character is drawn using its glyph bitmap and hinting to
   * improve character appearance on stems and curvature.
   */
  SingleBitPerPixelGridFit = 1,

  /**
   * Specifies that a character is drawn using its glyph bitmap and no hinting.
   * This results in better performance at the expense of quality.
   */
  SingleBitPerPixel = 2,

  /**
   * Specifies that a character is drawn using its antialiased glyph bitmap and
   * hinting. This results in much better quality due to antialiasing at a
   * higher performance cost.
   */
  AntiAliasGridFit = 3,

  /**
   * Specifies that a character is drawn using its antialiased glyph bitmap and
   * no hinting. Stem width differences may be noticeable because hinting is
   * turned off.
   */
  AntiAlias = 4,

  /**
   * Specifies that a character is drawn using its glyph ClearType bitmap and
   * hinting.
   */
  ClearTypeGridFit = 5,
}
