/**
 * @public
 */
export interface MenuObject {
  /**
   * The {@link MenuObject.AppendMenuItem} method appends a new item to the end
   * of the current {@link MenuObject}.
   *
   * @param flags - Controls the appearance and behavior of the new menu item.
   *   Can be a combination of the {@link MenuFlag}.
   * @param itemId - integer greater than `0`. Each menu item needs a unique
   *   id.
   * @param text - Menu item text
   */
  AppendMenuItem(flags: number, itemId: number, text: string): void;

  /**
   * The {@link MenuObject.AppendMenuSeparator} method appends menu separator.
   */
  AppendMenuSeparator(): void;

  /**
   * @param parentMenu -
   * @param flags - Controls the appearance and behavior of the new menu item.
   *   Can be a combination of the {@link MenuFlag}.
   * @param text -
   */
  AppendTo(parentMenu: number, flags: number, text: string): void;

  /**
   * The {@link MenuObject.CheckMenuItem} method creates checkbox item.
   *
   * @param itemId -
   * @param check -
   */
  CheckMenuItem(itemId: number, check: boolean): void;

  /**
   * The {@link MenuObject.CheckMenuRadioItem} method creates radio group from
   * menu items.
   *
   * @param firstItemId -
   * @param lastItemId -
   * @param selectedItemId -
   */
  CheckMenuRadioItem(
    firstItemId: number,
    lastItemId: number,
    selectedItemId: number,
  ): void;

  /**
   * @param x - The x-coordinate.
   * @param y - The y-coordinate.
   * @param flags - Use zero of more of the {@link TrackPopupMenu} flags.
   *   Default `0`.
   */
  TrackPopupMenu(x: number, y: number, flags?: number): number;
}
