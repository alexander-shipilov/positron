/**
 * The {@link CodePoint} interface represents a Unicode code point with CSS
 * Syntax Module Level 3 character classification properties.
 *
 * @remarks
 *   See https://whatwg.org.
 *
 * @public
 */
export interface CodePoint {
  /**
   * The {@link CodePoint.isDigit} read-only property returns `true` if this
   * code point is an ASCII decimal digit (`0`–`9`).
   *
   * @remarks
   *   See https://w3.org.
   */
  readonly isDigit: boolean;

  /**
   * The {@link CodePoint.isHexDigit} read-only property returns `true` if this
   * code point is an ASCII hexadecimal digit (`0`–`9`, `A`–`F`, `a`–`f`).
   *
   * @remarks
   *   See https://w3.org.
   */
  readonly isHexDigit: boolean;

  /**
   * The {@link CodePoint.isIdent} read-only property returns `true` if this
   * code point is an identifier code point.
   *
   * @remarks
   *   See https://w3.org.
   */
  readonly isIdent: boolean;

  /**
   * The {@link CodePoint.isIdentStart} read-only property returns `true` if
   * this code point is an identifier start code point.
   *
   * @remarks
   *   See https://w3.org.
   */
  readonly isIdentStart: boolean;

  /**
   * The {@link CodePoint.isLetter} read-only property returns `true` if this
   * code point is an ASCII Latin letter (`A`–`Z` or `a`–`z`).
   *
   * @remarks
   *   See https://w3.org.
   */
  readonly isLetter: boolean;

  /**
   * The {@link CodePoint.isLowercaseLetter} read-only property returns `true`
   * if this code point is an ASCII lowercase Latin letter (`a`–`z`).
   *
   * @remarks
   *   See https://w3.org.
   */
  readonly isLowercaseLetter: boolean;

  /**
   * The {@link CodePoint.isNewline} read-only property returns `true` if this
   * code point is `U+000A` LINE FEED.
   *
   * @remarks
   *   See https://w3.org.
   */
  readonly isNewline: boolean;

  /**
   * The {@link CodePoint.isNonAsciiIdent} read-only property returns `true`
   * if this code point is a non-ASCII identifier code point.
   *
   * @remarks
   *   See https://w3.org.
   */
  readonly isNonAsciiIdent: boolean;

  /**
   * The {@link CodePoint.isNonPrintable} read-only property returns `true` if
   * this code point is a non-printable control code point.
   *
   * @remarks
   *   See https://w3.org.
   */
  readonly isNonPrintable: boolean;

  /**
   * The {@link CodePoint.isUppercaseLetter} read-only property returns `true`
   * if this code point is an ASCII uppercase Latin letter (`A`–`Z`).
   *
   * @remarks
   *   See https://w3.org.
   */
  readonly isUppercaseLetter: boolean;

  /**
   * The {@link CodePoint.isWhitespace} read-only property returns `true` if
   * this code point is a whitespace code point (`U+0009`, `U+000A`, or
   * `U+0020`).
   *
   * @remarks
   *   See https://w3.org.
   */
  readonly isWhitespace: boolean;

  /**
   * The {@link CodePoint.length} read-only property returns the UTF-16 code
   * unit length (`1` or `2`) of this code point.
   */
  readonly length: number;

  /**
   * The {@link CodePoint.value} read-only property returns the numeric
   * Unicode scalar value of this code point.
   */
  readonly value: number;

  /**
   * The {@link CodePoint.toString} method returns the single-character string
   * representation of this code point.
   *
   * @returns A string containing the Unicode character for this code point.
   */
  toString(): string;
}
