/**
 * The {@link MouseEventMask} enumeration represents various virtual keys.
 *
 * @public
 */
export enum MouseEventMask {
  /**
   * The left mouse button is down.
   */
  LeftButton = 0x0001,

  /**
   * The right mouse button is down.
   */
  RightButton = 0x0002,

  /**
   * The SHIFT key is down.
   */
  ShiftKey = 0x0004,

  /**
   * The CTRL key is down.
   */
  CtrlKey = 0x0008,

  /**
   * The middle mouse button is down.
   */
  MiddleButton = 0x0010,

  /**
   * The first X button is down.
   */
  X1Button = 0x0020,

  /**
   * The second X button is down.
   */
  X2Button = 0x0040,
}
