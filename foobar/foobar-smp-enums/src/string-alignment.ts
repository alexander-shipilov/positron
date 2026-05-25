/**
 * The {@link StringAlignment} enumeration specifies how a string is aligned in
 * reference to the bounding rectangle. A bounding rectangle is used to define
 * the area in which the text displays.
 *
 * @see http://msdn.microsoft.com/en-us/library/ms534177(VS.85).aspx
 *
 * @public
 */
export enum StringAlignment {
  /**
   * Specifies that alignment is towards the origin of the bounding rectangle.
   * May be used for alignment of characters along the line or for alignment of
   * lines within the rectangle. For a right to left bounding rectangle
   * ({@link StringFormatFlags.DirectionRightToLeft}), the origin is at the
   * upper right.
   */
  Near = 0,

  /**
   * Specifies that alignment is centered between origin and extent (width) of
   * the formatting rectangle.
   */
  Center = 1,

  /**
   * Specifies that alignment is to the far extent (right side) of the
   * formatting rectangle.
   */
  Far = 2,
}
