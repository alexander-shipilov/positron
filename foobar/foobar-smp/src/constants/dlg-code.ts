/**
 * The {@link DlgCode} constant represents values indicating which type of
 * input the panel processes.
 *
 * @remarks
 * The {@link DlgCode} constant is used by:
 * {@link FbWindow.DlgCode}.
 *
 * @public
 */
export const DlgCode = {
  /**
   * Button.
   */
  Button: 0x2000,

  /**
   * Default push button.
   */
  DefPushButton: 0x0010,

  /**
   * EM_SETSEL messages.
   */
  HasSetSel: 0x0008,

  /**
   * Radio button.
   */
  RadioButton: 0x0040,

  /**
   * Static control.
   */
  Static: 0x0100,

  /**
   * Non-default push button.
   */
  UndefPushButton: 0x0020,

  /**
   * All keyboard input.
   */
  WantAllKeys: 0x0004,

  /**
   * Direction keys.
   */
  WantArrows: 0x0001,

  /**
   * WM_CHAR messages.
   */
  WantChars: 0x0080,

  /**
   * All keyboard input (the application passes this message in the MSG
   * structure to the control).
   */
  WantMessage: 0x0004,

  /**
   * TAB key.
   */
  WantTab: 0x0002,
} as const;
