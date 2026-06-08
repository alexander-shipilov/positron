/**
 * The {@link TextFormat} enum represents text formats.
 *
 * @remarks
 * The {@link TextFormat} enum is used by:
 * {@link GdiGraphics.GdiDrawText}.
 *
 * @see http://msdn.microsoft.com/en-us/library/dd162498(VS.85).aspx
 *
 * @public
 */
export enum TextFormat {
  /**
   * Aligns text to the left.
   */
  Left = 0x00000000,

  /**
   * Justifies the text to the top of the rectangle.
   */
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  Top = 0x00000000,

  /**
   * Centers text horizontally in the rectangle.
   */
  Center = 0x00000001,

  /**
   * Aligns text to the right.
   */
  Right = 0x00000002,

  /**
   * Centers text vertically.
   * This value is used only with the {@link TextFormat.SingleLine} value.
   */
  VCenter = 0x00000004,

  /**
   * Justifies the text to the bottom of the rectangle.
   * This value is used only with the {@link TextFormat.SingleLine} value.
   */
  Bottom = 0x00000008,

  /**
   * Breaks words.
   * Lines are automatically broken between words if a word would extend past
   * the edge of the rectangle specified by the `width` parameter. A carriage
   * return-line feed sequence also breaks the line.
   *
   * If this is not specified, output is on one line.
   */
  WordBreak = 0x00000010,

  /**
   * Displays text on a single line only. Carriage returns and line feeds do
   * not break the line.
   */
  SingleLine = 0x00000020,

  /**
   * Expands tab characters.
   * The default number of characters per tab is eight.
   * The {@link TextFormat.WordEllipsis}, {@link TextFormat.PathEllipsis}, and
   * {@link TextFormat.EndEllipsis} values cannot be used with the
   * {@link TextFormat.ExpandTabs} value.
   */
  ExpandTabs = 0x00000040,

  /**
   * Sets tab stops.
   * Bits 15-8 (high-order byte of the low-order word) of the `format`
   * parameter specify the number of characters for each tab. The default
   * number of characters per tab is eight.
   *
   * The {@link TextFormat.CalcRect}, {@link TextFormat.ExternalLeading},
   * {@link TextFormat.Internal}, {@link TextFormat.NoClip}, and
   * {@link TextFormat.NoPrefix} values cannot be used with the
   * {@link TextFormat.TabStop} value.
   */
  TabStop = 0x00000080,

  /**
   * Draws without clipping. {@link GdiGraphics.GdiDrawText} is somewhat faster
   * when {@link TextFormat.NoClip} is used.
   */
  NoClip = 0x00000100,

  /**
   * Includes the font external leading in line height. Normally, external
   * leading is not included in the height of a line of text.
   */
  ExternalLeading = 0x00000200,

  /**
   * Determines the width and height of the rectangle.
   * If there are multiple lines of text, {@link GdiGraphics.GdiDrawText} uses
   * the `width` parameter and extends the base of the rectangle to bound the
   * last line of text. If the largest word is wider than the rectangle, the
   * width is expanded. If the text is less than the width of the rectangle,
   * the width is reduced. If there is only one line of text,
   * {@link GdiGraphics.GdiDrawText} modifies the right side of the rectangle
   * so that it bounds the last character in the line. In either case,
   * {@link GdiGraphics.GdiDrawText} does not draw the text.
   */
  CalcRect = 0x00000400,

  /**
   * Turns off processing of prefix characters.
   * Normally, {@link GdiGraphics.GdiDrawText} interprets the mnemonic-prefix
   * character `&` as a directive to underscore the character that follows, and
   * the mnemonic-prefix characters `&&` as a directive to print a single `&`.
   * By specifying {@link TextFormat.NoPrefix}, this processing is turned off.
   *
   * Example:
   *  input string: "A&bc&&d"
   *  normal: "A_bc&d" - where "_b" means that "b" is underlined
   *  NoPrefix: "A&bc&&d"
   *
   * Compare with {@link TextFormat.HidePrefix} and
   * {@link TextFormat.PrefixOnly}.
   */
  NoPrefix = 0x00000800,

  /**
   * Uses the system font to calculate text metrics.
   */
  Internal = 0x00001000,

  /**
   * Duplicates the text-displaying characteristics of a multiline edit
   * control.
   * Specifically, the average character width is calculated in the same manner
   * as for an edit control, and the function does not display a partially
   * visible last line.
   */
  EditControl = 0x00002000,

  /**
   * For displayed text, replaces characters in the middle of the string with
   * ellipses so that the result fits in the specified rectangle. If the string
   * contains backslash (\) characters,
   * {@link TextFormat.PathEllipsis} preserves as much as possible of the text
   * after the last backslash.
   *
   * Compare with {@link TextFormat.EndEllipsis} and
   * {@link TextFormat.WordEllipsis}.
   */
  PathEllipsis = 0x00004000,

  /**
   * For displayed text, if the end of a string does not fit in the rectangle,
   * it is truncated and ellipses are added. If a word that is not at the end
   * of the string goes beyond the limits of the rectangle, it is truncated
   * without ellipses.
   *
   * Compare with {@link TextFormat.PathEllipsis} and
   * {@link TextFormat.WordEllipsis}.
   */
  EndEllipsis = 0x00008000,

  /**
   * Layout in right-to-left reading order for bidirectional text when the
   * `font` is a Hebrew or Arabic font. The default reading order for all text
   * is left-to-right.
   */
  RightToLeftReading = 0x00020000,

  /**
   * Truncates any word that does not fit in the rectangle and adds ellipses.
   * Compare with {@link TextFormat.EndEllipsis} and
   * {@link TextFormat.PathEllipsis}.
   */
  WordEllipsis = 0x00040000,

  /**
   * Prevents a line break at a double-wide character string, so that the line
   * breaking rule is equivalent to single-wide character string. For example,
   * this can be used in Korean windows, for more readability of icon labels.
   * This value has no effect unless {@link TextFormat.WordBreak} is specified.
   */
  NoFullWidthCharBreak = 0x00080000,

  /**
   * Ignores the ampersand (`&`) prefix character in the text.
   * The letter that follows will not be underlined, but other mnemonic-prefix
   * characters are still processed.
   *
   * Example:
   * input string: "A&bc&&d"
   * normal: "A_bc&d" - where "_b" means that "b" is underlined
   * HidePrefix: "Abc&d"
   *
   * Compare with {@link TextFormat.NoPrefix} and {@link TextFormat.PrefixOnly}.
   */
  HidePrefix = 0x00100000,

  /**
   * Draws only an underline at the position of the character following the
   * ampersand (`&`) prefix character. Does not draw any other characters in the
   * string.
   *
   * Example:
   *  input string: "A&bc&&d"n
   *  normal: "A_bc&d" - where "_b" means that "b" is underlined
   *  PrefixOnly: " _ "
   *
   *  Compare with {@link TextFormat.HidePrefix} and
   *  {@link TextFormat.NoPrefix}.
   */
  PrefixOnly = 0x00200000,
}
