/**
 * The {@link StringFormat} constant specifies text layout information
 * (such as orientation and clipping) and display manipulations (such as
 * ellipsis insertion, digit substitution, and representation of characters
 * that are not supported by a font).
 *
 * @remarks
 * Multiple flags set can produce combined effects:
 * When both {@link StringFormat.DirectionVertical} and
 * {@link StringFormat.DirectionRightToLeft} are set, individual lines of
 * text are drawn vertically. The first line starts at the right edge of the
 * layout rectangle; the second line of text is to the left of the first line,
 * and so on.
 *
 * When {@link StringFormat.DirectionVertical} is set and
 * {@link StringFormat.DirectionRightToLeft} is not set, individual lines
 * of text are drawn vertically. The first line starts at the left edge of the
 * layout rectangle; the second line of text is to the right of the first line.
 *
 * When {@link StringFormat.DirectionRightToLeft} is set and
 * {@link StringFormat.DirectionVertical} is not set, the individual lines
 * of text are horizontal and the reading order is from right to left. This
 * setting does not change the order in which characters are displayed, it
 * simply specifies the order in which characters can be read.
 *
 * The {@link StringFormat.DirectionVertical} and
 * {@link StringFormat.DirectionRightToLeft} flags can affect string
 * alignment.
 *
 * The {@link StringFormat} constant is used by:
 * {@link GdiGraphics.MeasureString},
 * {@link GdiGraphics.DrawString}.
 *
 * @see http://msdn.microsoft.com/en-us/library/ms534181(VS.85).aspx
 *
 * @public
 */
export const StringFormat = {
  /**
   * Specifies that reading order is right to left.
   * For horizontal text, characters are read from right to left.
   * For vertical text, columns are read from right to left.
   * By default, horizontal or vertical text is read from left to right.
   */
  DirectionRightToLeft: 0x00000001,

  /**
   * Specifies that reading order is right to left.
   * For horizontal text, characters are read from right to left.
   * For vertical text, columns are read from right to left.
   * By default, horizontal or vertical text is read from left to right.
   */
  DirectionVertical: 0x00000002,

  /**
   * Specifies that Unicode layout control characters are displayed with a
   * representative character.
   */
  DisplayFormatControl: 0x00000020,

  /**
   * Specifies that only entire lines are laid out in the layout rectangle.
   * By default, layout continues until the end of the text or until no more
   * lines are visible as a result of clipping, whichever comes first. The
   * default settings allow the last line to be partially obscured by a layout
   * rectangle that is not a whole multiple of the line height. To ensure that
   * only whole lines are seen, set this flag and be careful to provide a
   * layout rectangle at least as tall as the height of one line.
   */
  LineLimit: 0x00002000,

  /**
   * Specifies that the space at the end of each line is included in a string
   * measurement. By default, the boundary rectangle returned by the
   * {@link GdiGraphics.MeasureString} method excludes the space at the end of
   * each line. Set this flag to include that space in the measurement.
   */
  MeasureTrailingSpaces: 0x00000800,

  /**
   * Specifies that characters overhanging the layout rectangle and text
   * extending outside the layout rectangle are allowed to show. By default,
   * all overhanging characters and text that extends outside the layout
   * rectangle are clipped. Any trailing spaces (spaces that are at the end of
   * a line) that extend outside the layout rectangle are clipped. Therefore,
   * the setting of this flag will have an effect on a string measurement if
   * trailing spaces are being included in the measurement. If clipping is
   * enabled, trailing spaces that extend outside the layout rectangle are not
   * included in the measurement. If clipping is disabled, all trailing spaces
   * are included in the measurement, regardless of whether they are outside
   * the layout rectangle.
   */
  NoClip: 0x00004000,

  /**
   * Specifies that parts of characters are allowed to overhang the string's
   * layout rectangle. By default, characters are first aligned inside the
   * rectangle's boundaries, then any characters which still overhang the
   * boundaries are repositioned to avoid any overhang and thereby avoid
   * affecting pixels outside the layout rectangle. An italic, lowercase letter
   * F (f) is an example of a character that may have overhanging parts.
   * Setting this flag ensures that the character aligns visually with the
   * lines above and below but may cause parts of characters, which lie outside
   * the layout rectangle, to be clipped or painted.
   */
  NoFitBlackBox: 0x00000004,

  /**
   * Specifies that an alternate font is used for characters that are not
   * supported in the requested font. By default, any missing characters are
   * displayed with the "fonts missing" character, usually an open square.
   */
  NoFontFallback: 0x00000400,

  /**
   * Specifies that the wrapping of text to the next line is disabled.
   * NoWrap is implied when a point of origin is used instead of a layout
   * rectangle. When drawing text within a rectangle, by default, text is
   * broken at the last word boundary that is inside the rectangle's boundary
   * and wrapped to the next line.
   */
  NoWrap: 0x00001000,
} as const;
