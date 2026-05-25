/**
 * The {@link SmoothingMode} enumeration represents the types of smoothing
 * (antialiasing) that is applied to lines and curves.
 *
 * @see http://msdn.microsoft.com/en-us/library/ms534173(VS.85).aspx
 *
 * @public
 */
export enum SmoothingMode {
  /**
   * Specifies that smoothing is not applied.
   */
  Default = 0,

  /**
   * Specifies that smoothing is not applied.
   */
  HighSpeed = 1,

  /**
   * Specifies that smoothing is applied using an 8 X 4 box filter.
   */
  HighQuality = 2,

  /**
   * Specifies that smoothing is not applied.
   */
  None = 3,

  /**
   * Specifies that smoothing is applied using an 8 X 4 box filter.
   */
  AntiAlias = 4,

  /**
   * Specifies that smoothing is applied using an 8 X 8 box filter.
   */
  AntiAlias8x8 = 5,
}
