/**
 * The {@link TrackPopupMenu} constant represents flags to locate and track
 * the menu.
 *
 * @remarks
 * The {@link TrackPopupMenu} constant is used by:
 * {@link MenuObject.TrackPopupMenu}.
 *
 * @see http://msdn.microsoft.com/en-us/library/ms648002(VS.85).aspx
 *
 * @public
 */
export const TrackPopupMenu = {
  /**
   * Positions the shortcut menu so that its bottom side is aligned with the
   * coordinate specified by the y parameter.
   */
  BottomAlign: 0x0020,

  /**
   * Animates the menu from bottom to top.
   */
  BottomToTopAnimation: 0x2000,

  /**
   * Centers the shortcut menu horizontally relative to the coordinate
   * specified by the x parameter.
   */
  CenterAlign: 0x0004,

  Horizontal: 0x0000,

  /**
   * Positions the shortcut menu so that its left side is aligned with the
   * coordinate specified by the x parameter.
   */
  LeftAlign: 0x0000,

  /**
   * Animates the menu from left to right.
   */
  LeftToRightAnimation: 0x0400,

  /**
   * Displays menu without animation.
   */
  NoAnimation: 0x4000,

  /**
   * Positions the shortcut menu so that its right side is aligned with the
   * coordinate specified by the x parameter.
   */
  RightAlign: 0x0008,

  /**
   * Animates the menu from right to left.
   */
  RightToLeftAnimation: 0x0800,

  /**
   * Positions the shortcut menu so that its top side is aligned with the
   * coordinate specified by the y parameter.
   */
  TopAlign: 0x0000,

  /**
   * Animates the menu from top to bottom.
   */
  TopToBottomAnimation: 0x1000,

  /**
   * Centers the shortcut menu vertically relative to the coordinate specified
   * by the y parameter.
   */
  VCenterAlign: 0x0010,

  Vertical: 0x0040,
} as const;
