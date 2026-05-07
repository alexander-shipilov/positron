/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
/**
 * The {@link MenuFlags} enumeration contains menu flags to control the
 * appearance and behavior of the new menu item.
 *
 * This enumeration is used by:
 *  - {@link MenuObject.AppendMenuItem}
 *  - {@link MenuObject.AppendTo}
 *
 * @see http://msdn.microsoft.com/en-us/library/ms647616(VS.85).aspx
 *
 * @public
 */
export enum MenuFlags {
  /**
   * Enables the menu item so that it can be selected, and restores it from its
   * grayed state.
   */
  Enabled = 0x00000000,

  /**
   * Does not place a check mark next to the item (default).
   */
  Unchecked = 0x00000000,

  /**
   * Contains a string.
   */
  String = 0x00000000,

  /**
   * Disables the menu item and grays it so that it cannot be selected.
   */
  Grayed = 0x00000001,

  /**
   * Disables the menu item so that it cannot be selected, but the flag does
   * not gray it.
   */
  Disabled = 0x00000002,

  /**
   * Places a check mark next to the menu item.
   */
  Checked = 0x00000008,

  /**
   * Functions the same as the {@link MenuFlags.MenuBreak} flag for a menu bar.
   * For a drop-down menu, submenu, or shortcut menu, the new column is
   * separated from the old column by a vertical line.
   */
  MenuBarBreak = 0x00000020,

  /**
   * Places the item on a new line (for a menu bar) or in a new column (for a
   * drop-down menu, submenu, or shortcut menu) without separating columns.
   */
  MenuBreak = 0x00000040,

  /**
   * Draws a horizontal dividing line.
   * This flag is used only in a drop-down menu, submenu, or shortcut menu.
   * The line cannot be grayed, disabled, or highlighted.
   */
  Separator = 0x00000800,
}
