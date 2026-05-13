/**
 * The {@link InterpolationMode} enumeration specifies the algorithm that is
 * used when images are scaled or rotated.
 *
 * @remarks
 * The {@link FontTypeDui} enumeration is used by:
 * {@link GdiGraphics.SetInterpolationMode},
 * {@link GdiBitmap.Resize}.
 *
 * @see http://msdn.microsoft.com/en-us/library/ms534141(VS.85).aspx
 *
 * @public
 */
export enum InterpolationMode {
  /**
   * Specifies the default interpolation mode.
   */
  Default = 0,

  /**
   * Specifies a low-quality mode.
   */
  LowQuality = 1,

  /**
   * Specifies a high-quality mode.
   */
  HighQuality = 2,

  /**
   * Specifies bilinear interpolation. No prefiltering is done.
   * This mode is not suitable for shrinking an image below 50 percent of its
   * original size.
   */
  Bilinear = 3,

  /**
   * Specifies bicubic interpolation. No prefiltering is done.
   * This mode is not suitable for shrinking an image below 25 percent of its
   * original size.
   */
  Bicubic = 4,

  /**
   * Specifies nearest-neighbor interpolation.
   */
  NearestNeighbor = 5,

  /**
   * Specifies high-quality, bilinear interpolation.
   * Prefiltering is performed to ensure high-quality shrinking.
   */
  HighQualityBilinear = 6,

  /**
   * Specifies high-quality, bicubic interpolation.
   * Prefiltering is performed to ensure high-quality shrinking.
   * This mode produces the highest quality transformed images.
   */
  HighQualityBicubic = 7,
}
