/**
 * The {@link CodePoint} interface represents a code point.
 *
 * @remarks
 *   https://infra.spec.whatwg.org/#code-point
 *
 *   A code point is a Unicode code point and is represented as "U+" followed
 *   by four-to-six ASCII upper hex digits, in the range U+0000 to U+10FFFF,
 *   inclusive. A code point’s value is its underlying number.
 *
 * @public
 */
export interface CodePoint {
  /**
   * The {@link CodePoint.isDigit} read-only property returns `true` if this
   * code point is a decimal digit code point.
   *
   * @remarks
   *   https://www.w3.org/TR/css-syntax-3/#digit
   *
   *   `digit`
   *
   *   A code point between U+0030 DIGIT ZERO (0) and U+0039 DIGIT NINE (9)
   *   inclusive.
   */
  readonly isDigit: boolean;

  /**
   * The {@link CodePoint.isHexDigit} read-only property returns `true` if this
   * code point is a hexadecimal digit code point.
   *
   * @remarks
   *   https://www.w3.org/TR/css-syntax-3/#hex-digit
   *
   *   `hex digit`
   *
   *   A `digit`, or a code point between U+0041 LATIN CAPITAL LETTER A (A) and
   *   U+0046 LATIN CAPITAL LETTER F (F) inclusive, or a code point between
   *   U+0061 LATIN SMALL LETTER A (a) and U+0066 LATIN SMALL LETTER F (f)
   *   inclusive.
   */
  readonly isHexDigit: boolean;

  /**
   * The {@link CodePoint.isIdent} read-only property returns `true` if this
   * code point is an identifier code point.
   *
   * @remarks
   *   https://www.w3.org/TR/css-syntax-3/#ident-code-point
   *
   *   `ident code point`
   *
   *   An `ident-start code point`, a `digit`, or U+002D HYPHEN-MINUS (-).
   */
  readonly isIdent: boolean;

  /**
   * The {@link CodePoint.isIdentStart} read-only property returns `true` if
   * this code point is an identifier start code point.
   *
   * @remarks
   *   https://www.w3.org/TR/css-syntax-3/#ident-start-code-point
   *
   *   `ident-start code point`
   *
   *   A `letter`, a `non-ASCII ident code point`, or U+005F LOW LINE (_).
   */
  readonly isIdentStart: boolean;

  /**
   * The {@link CodePoint.isLetter} read-only property returns `true` if this
   * code point is a Latin letter code point.
   *
   * @remarks
   *   https://www.w3.org/TR/css-syntax-3/#letter
   *
   *   `letter`
   *
   *   An `uppercase letter` or a `lowercase letter`.
   */
  readonly isLetter: boolean;

  /**
   * The {@link CodePoint.isLowercaseLetter} read-only property returns `true`
   * if this code point is a Latin lowercase letter code point.
   *
   * @remarks
   *   https://www.w3.org/TR/css-syntax-3/#lowercase-letter
   *
   *   `lowercase letter`
   *
   *   A code point between U+0061 LATIN SMALL LETTER A (a) and U+007A LATIN
   *   SMALL LETTER Z (z) inclusive.
   */
  readonly isLowercaseLetter: boolean;

  /**
   * The {@link CodePoint.isNewline} read-only property returns `true` if this
   * code point is a `LINE FEED` code point.
   *
   * @remarks
   *   https://www.w3.org/TR/css-syntax-3/#newline
   *
   *   `newline`
   *
   *   U+000A LINE FEED. Note that U+000D CARRIAGE RETURN and U+000C FORM FEED
   *   are not included in this definition, as they are converted to U+000A
   *   LINE FEED during preprocessing.
   */
  readonly isNewline: boolean;

  /**
   * The {@link CodePoint.isNonASCIIIdent} read-only property returns `true`
   * if this code point is a non-ASCII identifier code point.
   *
   * https://www.w3.org/TR/css-syntax-3/#non-ascii-ident-code-point
   *
   * `non-ASCII ident code point`
   *
   * A code point whose value is any of:
   *
   *     U+00B7
   *     between U+00C0 and U+00D6
   *     between U+00D8 and U+00F6
   *     between U+00F8 and U+037D
   *     between U+037F and U+1FFF
   *     U+200C
   *     U+200D
   *     U+203F
   *     U+2040
   *     between U+2070 and U+218F
   *     between U+2C00 and U+2FEF
   *     between U+3001 and U+D7FF
   *     between U+F900 and U+FDCF
   *     between U+FDF0 and U+FFFD
   *     greater than or equal to U+10000
   *
   * All of these ranges are inclusive.
   */
  readonly isNonASCIIIdent: boolean;

  /**
   * The {@link CodePoint.isNonPrintable} read-only property returns `true` if
   * this code point is a non-printable code point.
   *
   * @remarks
   *   https://www.w3.org/TR/css-syntax-3/#non-printable-code-point
   *
   *   `non-printable code point`
   *
   *   A code point between U+0000 NULL and U+0008 BACKSPACE inclusive, or
   *   U+000B LINE TABULATION, or a code point between U+000E SHIFT OUT and
   *   U+001F INFORMATION SEPARATOR ONE inclusive, or U+007F DELETE.
   */
  readonly isNonPrintable: boolean;

  /**
   * The {@link CodePoint.isUppercaseLetter} read-only property returns `true`
   * if this code point is a Latin uppercase letter code point.
   *
   * @remarks
   *   https://www.w3.org/TR/css-syntax-3/#uppercase-letter
   *
   *   `uppercase letter`
   *
   *   A code point between U+0041 LATIN CAPITAL LETTER A (A) and U+005A
   *   LATIN CAPITAL LETTER Z (Z) inclusive.
   */
  readonly isUppercaseLetter: boolean;

  /**
   * The {@link CodePoint.isWhitespace} read-only property returns `true` if
   * this code point is a whitespace code point.
   *
   * @remarks
   *   https://www.w3.org/TR/css-syntax-3/#whitespace
   *
   *   `whitespace`
   *
   *   A `newline`, U+0009 CHARACTER TABULATION, or U+0020 SPACE.
   */
  readonly isWhitespace: boolean;

  /**
   * The {@link CodePoint.length} read-only property returns the length of this
   * code point.
   */
  readonly length: number;

  /**
   * The {@link CodePoint.value} read-only property returns the value of this
   * code point.
   */
  readonly value: number;

  /**
   * The {@link CodePoint.toString} method returns a string representation of
   * this code point.
   */
  toString(): string;
}
