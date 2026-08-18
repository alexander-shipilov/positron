/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
/**
 * The {@link RotateFlipType} enumeration specifies the directions of an image's
 * rotation and the axis used to flip the image.
 *
 * @remarks
 * The {@link RotateFlipType} enumeration is used by:
 * {@link GdiBitmap.RotateFlip}.
 *
 * @see http://msdn.microsoft.com/en-us/library/ms534171(VS.85).aspx
 *
 * @public
 */
export enum RotateFlipType {
  /**
   * Specifies no rotation and no flipping.
   */
  RotateNoneFlipNone = 0,

  /**
   * Specifies a 180-degree rotation followed by a horizontal flip and then a
   * vertical flip.
   */
  Rotate180FlipXY = 0,

  /**
   * Specifies a 90-degree rotation without flipping.
   */
  Rotate90FlipNone = 1,

  /**
   * Specifies a 270-degree rotation followed by a horizontal flip and then a
   * vertical flip.
   */
  Rotate270FlipXY = 1,

  /**
   * Specifies a 180-degree rotation without flipping.
   */
  Rotate180FlipNone = 2,

  /**
   * Specifies no rotation, a horizontal flip, and then a vertical flip.
   */
  RotateNoneFlipXY = 2,

  /**
   * Specifies a 270-degree rotation without flipping.
   */
  Rotate270FlipNone = 3,

  /**
   * Specifies a 90-degree rotation followed by a horizontal flip and then a
   * vertical flip.
   */
  Rotate90FlipXY = 3,

  /**
   * Specifies no rotation and a horizontal flip.
   */
  RotateNoneFlipX = 4,

  /**
   * Specifies a 180-degree rotation followed by a vertical flip.
   */
  Rotate180FlipY = 4,

  /**
   * Specifies a 90-degree rotation followed by a horizontal flip.
   */
  Rotate90FlipX = 5,

  /**
   * Specifies a 270-degree rotation followed by a vertical flip.
   */
  Rotate270FlipY = 5,

  /**
   * Specifies a 180-degree rotation followed by a horizontal flip.
   */
  Rotate180FlipX = 6,

  /**
   * Specifies no rotation and a vertical flip.
   */
  RotateNoneFlipY = 6,

  /**
   * Specifies a 270-degree rotation followed by a horizontal flip.
   */
  Rotate270FlipX = 7,

  /**
   * Specifies a 90-degree rotation followed by a vertical flip.
   */
  Rotate90FlipY = 7,
}
