/**
 * The {@link StringTrimming} enumeration specifies how to trim characters from
 * a string so that the string fits into a layout rectangle. The layout
 * rectangle is used to position and size the display string.
 *
 * @see http://msdn.microsoft.com/en-us/library/ms534403(VS.85).aspx
 *
 * @public
 */
export enum StringTrimming {
  /**
   * Specifies that no trimming is done.
   */
  None = 0,

  /**
   * Specifies that the string is broken at the boundary of the last character
   * that is inside the layout rectangle. This is the default.
   */
  Character = 1,

  /**
   * Specifies that the string is broken at the boundary of the last word that
   * is inside the layout rectangle.
   */
  Word = 2,

  /**
   * Specifies that the string is broken at the boundary of the last character
   * that is inside the layout rectangle and an ellipsis (...) is inserted
   * after the character.
   */
  EllipsisCharacter = 3,

  /**
   * Specifies that the string is broken at the boundary of the last word that
   * is inside the layout rectangle and an ellipsis (...) is inserted after the
   * word.
   */
  EllipsisWord = 4,

  /**
   * Specifies that the center is removed from the string and replaced by an
   * ellipsis. The algorithm keeps as much of the last portion of the string as
   * possible.
   */
  EllipsisPath = 5,
}
