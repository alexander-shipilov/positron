/**
 * The {@link ColourTypeCui} enumeration specifies `Columns UI` colors types.
 *
 * @remarks
 * The {@link ColourTypeCui} enumeration is used by:
 * {@link FbWindow.GetColourCUI}.
 *
 * @public
 */
export enum ColourTypeCui {
  /**
   * Default text color
   */
  Text = 0,

  /**
   * Selected item text color
   */
  SelectionText = 1,

  /**
   * Inactive selected item text color
   */
  InactiveSelectionText = 2,

  /**
   * Default background color
   */
  Background = 3,

  /**
   * Selected item background color
   */
  SelectionBackground = 4,

  /**
   * Inactive selected item background color
   */
  InactiveSelectionBackground = 5,

  /**
   * Active item frame color
   */
  ActiveItemFrame = 6,
}
