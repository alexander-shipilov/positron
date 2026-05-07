/**
 * The {@link Cursor} enumeration is used by {@link Window.SetCursor}.
 *
 * @public
 */
export enum Cursor {
  /**
   * No cursor
   */
  Hidden = -1,

  /**
   * Standard arrow
   */
  Arrow = 32512,

  /**
   * I-beam
   */
  IBeam = 32513,

  /**
   * Hourglass
   */
  Wait = 32514,

  /**
   * Crosshair
   */
  Crosshair = 32515,

  /**
   * Vertical arrow
   */
  UpArrow = 32516,

  /**
   * Double-pointed arrow pointing northwest and southeast
   */
  SizeNWSE = 32642,

  /**
   * Double-pointed arrow pointing northeast and southwest
   */
  SizeNESW = 32643,

  /**
   * Double-pointed arrow pointing west and east
   */
  SizeWE = 32644,

  /**
   * Double-pointed arrow pointing north and south
   */
  SizeNS = 32645,

  /**
   * Four-pointed arrow pointing north, south, east, and west
   */
  SizeAll = 32646,

  /**
   * Slashed circle
   */
  No = 32648,

  /**
   * Hand
   */
  Hand = 32649,

  /**
   * Standard arrow and small hourglass
   */
  AppStarting = 32650,

  /**
   * Arrow and question mark
   */
  Help = 32651,
}
