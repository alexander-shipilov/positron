/**
 * The {@link DropEffect} constants represents the effects of a drag-and-drop
 * operation.
 *
 * @public
 */
export const DropEffect = {
  /**
   * Drop results in a copy. The original data is untouched by the drag source.
   */
  Copy: 1,

  /**
   * Drag source should create a link to the original data.
   */
  Link: 4,

  /**
   * Drag source should remove the data.
   */
  Move: 2,

  /**
   * Drop target cannot accept the data.
   */
  None: 0,

  /**
   * Scrolling is about to start or is currently occurring in the target.
   * This value is used in addition to the other values.
   */
  Scroll: 0x80000000,
} as const;
