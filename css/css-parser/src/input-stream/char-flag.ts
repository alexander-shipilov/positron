/**
 * The {@link CharFlag} enumeration represents bitmask flags classifying CSS
 * Syntax Module Level 3 code points.
 *
 * @internal
 */
export enum CharFlag {
  /**
   * The {@link CharFlag.No} member indicates no special character class.
   */
  No = 0,

  /**
   * The {@link CharFlag.Np} member indicates a non-printable code point.
   */
  Np = 1,

  /**
   * The {@link CharFlag.Ws} member indicates a whitespace code point.
   */
  Ws = 2,

  /**
   * The {@link CharFlag.Nl} member indicates a newline (`U+000A`) code point.
   */
  Nl = 4,

  /**
   * The {@link CharFlag.Di} member indicates an ASCII decimal digit.
   */
  Di = 8,

  /**
   * The {@link CharFlag.Hd} member indicates an ASCII hexadecimal digit.
   */
  Hd = 16,

  /**
   * The {@link CharFlag.Le} member indicates an ASCII Latin letter.
   */
  Le = 32,

  /**
   * The {@link CharFlag.Ul} member indicates an ASCII uppercase Latin letter.
   */
  Ul = 64,

  /**
   * The {@link CharFlag.Ll} member indicates an ASCII lowercase Latin letter.
   */
  Ll = 128,

  /**
   * The {@link CharFlag.Id} member indicates an identifier code point.
   */
  Id = 256,

  /**
   * The {@link CharFlag.Is} member indicates an identifier-start code point.
   */
  Is = 512,

  /**
   * The {@link CharFlag.In} member indicates a non-ASCII identifier code
   * point.
   */
  In = 1024,
}
