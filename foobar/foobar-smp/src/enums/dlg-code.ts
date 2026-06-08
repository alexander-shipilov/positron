/**
 * The {@link DlgCode} enum represents values indicating which type of
 * input the panel processes.
 *
 * @remarks
 * The {@link DlgCode} enum is used by:
 * {@link FbWindow.DlgCode}.
 *
 * @public
 */
export enum DlgCode {
  /**
   * Direction keys.
   */
  WantArrows = 0x0001,

  /**
   * TAB key.
   */
  WantTab = 0x0002,

  /**
   * All keyboard input.
   */
  WantAllKeys = 0x0004,

  /**
   * All keyboard input (the application passes this message in the MSG
   * structure to the control).
   */
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  WantMessage = 0x0004,

  /**
   * EM_SETSEL messages.
   */
  HasSetSel = 0x0008,

  /**
   * Default push button.
   */
  DefPushButton = 0x0010,

  /**
   * Non-default push button.
   */
  UndefPushButton = 0x0020,

  /**
   * Radio button.
   */
  RadioButton = 0x0040,

  /**
   * WM_CHAR messages.
   */
  WantChars = 0x0080,

  /**
   * Static control.
   */
  Static = 0x0100,

  /**
   * Button.
   */
  Button = 0x2000,
}
