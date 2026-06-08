/**
 * The {@link TrackPopupMenu} enum represents flags to locate and track
 * the menu.
 *
 * @remarks
 * The {@link TrackPopupMenu} enum is used by:
 * {@link MenuObject.TrackPopupMenu}.
 *
 * @see http://msdn.microsoft.com/en-us/library/ms648002(VS.85).aspx
 *
 * @public
 */
export enum TrackPopupMenu {
  Horizontal = 0x0000,

  /**
   * Positions the shortcut menu so that its left side is aligned with the
   * coordinate specified by the x parameter.
   */
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  LeftAlign = 0x0000,

  /**
   * Positions the shortcut menu so that its top side is aligned with the
   * coordinate specified by the y parameter.
   */
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  TopAlign = 0x0000,

  /**
   * Centers the shortcut menu horizontally relative to the coordinate
   * specified by the x parameter.
   */
  CenterAlign = 0x0004,

  /**
   * Positions the shortcut menu so that its right side is aligned with the
   * coordinate specified by the x parameter.
   */
  RightAlign = 0x0008,

  /**
   * Centers the shortcut menu vertically relative to the coordinate specified
   * by the y parameter.
   */
  VCenterAlign = 0x0010,

  /**
   * Positions the shortcut menu so that its bottom side is aligned with the
   * coordinate specified by the y parameter.
   */
  BottomAlign = 0x0020,

  Vertical = 0x0040,

  /**
   * Animates the menu from left to right.
   */
  LeftToRightAnimation = 0x0400,

  /**
   * Animates the menu from right to left.
   */
  RightToLeftAnimation = 0x0800,

  /**
   * Animates the menu from top to bottom.
   */
  TopToBottomAnimation = 0x1000,

  /**
   * Animates the menu from bottom to top.
   */
  BottomToTopAnimation = 0x2000,

  /**
   * Displays menu without animation.
   */
  NoAnimation = 0x4000,
}
