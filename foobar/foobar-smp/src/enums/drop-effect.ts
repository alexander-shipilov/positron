/**
 * The {@link DropEffect} enums represents the effects of a drag-and-drop
 * operation.
 *
 * @public
 */

export enum DropEffect {
  /**
   * Drop target cannot accept the data.
   */
  None = 0,

  /**
   * Drop results in a copy. The original data is untouched by the drag source.
   */
  Copy = 1,

  /**
   * Drag source should remove the data.
   */
  Move = 2,

  /**
   * Drag source should create a link to the original data.
   */
  Link = 4,

  /**
   * Scrolling is about to start or is currently occurring in the target.
   * This value is used in addition to the other values.
   */
  Scroll = 0x80000000,
}
