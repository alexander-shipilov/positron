/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
/**
 * The {@link VirtualKey} enumeration represents virtual keys.
 *
 * @remarks
 * The {@link VirtualKey} enumeration is used by:
 * {@link FbCallbacks.on_key_down}
 * {@link FbCallbacks.on_key_up}
 * {@link FbUtils.IsKeyPressed}.
 *
 * @public
 */
export enum VirtualKey {
  /**
   * Left mouse button.
   */
  LeftButton = 0x01,

  /**
   * Right mouse button.
   */
  RightButton = 0x02,

  /**
   * Control-break processing.
   */
  Cancel = 0x03,

  /**
   * Middle mouse button (three-button mouse).
   */
  MiddleButton = 0x04,

  /**
   * X1 mouse button.
   */
  X1Button = 0x05,

  /**
   * X2 mouse button.
   */
  X2Button = 0x06,

  /**
   * BACKSPACE key.
   */
  BackSpace = 0x08,

  /**
   * TAB key.
   */
  Tab = 0x09,

  /**
   * CLEAR key.
   */
  Clear = 0x0c,

  /**
   * ENTER key.
   */
  Enter = 0x0d,

  /**
   * SHIFT key.
   */
  Shift = 0x10,

  /**
   * CTRL key.
   */
  Ctrl = 0x11,

  /**
   * ALT key.
   */
  Alt = 0x12,

  /**
   * PAUSE key.
   */
  Pause = 0x13,

  /**
   * CAPS LOCK key.
   */
  CapsLock = 0x14,

  /**
   * IME Kana mode.
   */
  Kana = 0x15,

  /**
   * IME Hanguel mode.
   * Maintained for compatibility; use {@link VirtualKey.Hangul} instead.
   */
  Hanguel = 0x15,

  /**
   * IME Hangul mode.
   */
  Hangul = 0x15,

  /**
   * IME On.
   */
  ImeOn = 0x16,

  /**
   * IME Junja mode.
   */
  Junja = 0x17,

  /**
   * IME final mode.
   */
  Final = 0x18,

  /**
   * IME Hanja mode.
   */
  Hanja = 0x19,

  /**
   * IME Kanji mode.
   */
  Kanji = 0x19,

  /**
   * IME Off.
   */
  ImeOff = 0x1a,

  /**
   * ESC key.
   */
  Esc = 0x1b,

  /**
   * IME convert.
   */
  Convert = 0x1c,

  /**
   * IME nonconvert.
   */
  NonConvert = 0x1d,

  /**
   * IME accept.
   */
  Accept = 0x1e,

  /**
   * IME mode change request.
   */
  ModeChange = 0x1f,

  /**
   * SPACE key.
   */
  Space = 0x20,

  /**
   * PAGE UP key.
   */
  PageUp = 0x21,

  /**
   * PAGE DOWN key.
   */
  PageDown = 0x22,

  /**
   * END key.
   */
  End = 0x23,

  /**
   * HOME key.
   */
  Home = 0x24,

  /**
   * LEFT ARROW key.
   */
  Left = 0x25,

  /**
   * UP ARROW key.
   */
  Up = 0x26,

  /**
   * RIGHT ARROW key.
   */
  Right = 0x27,

  /**
   * DOWN ARROW key.
   */
  Down = 0x28,

  /**
   * SELECT key.
   */
  Select = 0x29,

  /**
   * PRINT key.
   */
  Print = 0x2a,

  /**
   * EXECUTE key.
   */
  Execute = 0x2b,

  /**
   * PRINT SCREEN key.
   */
  PrintScreen = 0x2c,

  /**
   * INS key.
   */
  Insert = 0x2d,

  /**
   * DEL key.
   */
  Delete = 0x2e,

  /**
   * HELP key.
   */
  Help = 0x2f,

  /**
   * 0 key.
   */
  Num0 = 0x30,

  /**
   * 1 key.
   */
  Num1 = 0x31,

  /**
   * 2 key.
   */
  Num2 = 0x32,

  /**
   * 3 key.
   */
  Num3 = 0x33,

  /**
   * 4 key.
   */
  Num4 = 0x34,

  /**
   * 5 key.
   */
  Num5 = 0x35,

  /**
   * 6 key.
   */
  Num6 = 0x36,

  /**
   * 7 key.
   */
  Num7 = 0x37,

  /**
   * 8 key.
   */
  Num8 = 0x38,

  /**
   * 9 key.
   */
  Num9 = 0x39,

  /**
   * A key.
   */
  A = 0x41,

  /**
   * B key.
   */
  B = 0x42,

  /**
   * C key.
   */
  C = 0x43,

  /**
   * D key.
   */
  D = 0x44,

  /**
   * E key.
   */
  E = 0x45,

  /**
   * F key.
   */
  F = 0x46,

  /**
   * G key.
   */
  G = 0x47,

  /**
   * H key.
   */
  H = 0x48,

  /**
   * I key.
   */
  I = 0x49,

  /**
   * J key.
   */
  J = 0x4a,

  /**
   * K key.
   */
  K = 0x4b,

  /**
   * L key.
   */
  L = 0x4c,

  /**
   * M key.
   */
  M = 0x4d,

  /**
   * N key.
   */
  N = 0x4e,

  /**
   * O key.
   */
  O = 0x4f,

  /**
   * P key.
   */
  P = 0x50,

  /**
   * Q key.
   */
  Q = 0x51,

  /**
   * R key.
   */
  R = 0x52,

  /**
   * S key.
   */
  S = 0x53,

  /**
   * T key.
   */
  T = 0x54,

  /**
   * U key.
   */
  U = 0x55,

  /**
   * V key.
   */
  V = 0x56,

  /**
   * W key.
   */
  W = 0x57,

  /**
   * X key.
   */
  X = 0x58,

  /**
   * Y key.
   */
  Y = 0x59,

  /**
   * Z key.
   */
  Z = 0x5a,

  /**
   * Left Windows key (Natural keyboard).
   */
  LeftWindows = 0x5b,

  /**
   * Right Windows key (Natural keyboard).
   */
  RightWindows = 0x5c,

  /**
   * Applications key (Natural keyboard).
   */
  Applications = 0x5d,

  /**
   * Computer Sleep key.
   */
  Sleep = 0x5f,

  /**
   * Numeric keypad 0 key.
   */
  NumPad0 = 0x60,

  /**
   * Numeric keypad 1 key.
   */
  NumPad1 = 0x61,

  /**
   * Numeric keypad 2 key.
   */
  NumPad2 = 0x62,

  /**
   * Numeric keypad 3 key.
   */
  NumPad3 = 0x63,

  /**
   * Numeric keypad 4 key.
   */
  NumPad4 = 0x64,

  /**
   * Numeric keypad 5 key.
   */
  NumPad5 = 0x65,

  /**
   * Numeric keypad 6 key.
   */
  NumPad6 = 0x66,

  /**
   * Numeric keypad 7 key.
   */
  NumPad7 = 0x67,

  /**
   * Numeric keypad 8 key.
   */
  NumPad8 = 0x68,

  /**
   * Numeric keypad 9 key.
   */
  NumPad9 = 0x69,

  /**
   * Multiply key.
   */
  Multiply = 0x6a,

  /**
   * Add key.
   */
  Add = 0x6b,

  /**
   * Separator key.
   */
  Separator = 0x6c,

  /**
   * Subtract key.
   */
  Subtract = 0x6d,

  /**
   * Decimal key.
   */
  Decimal = 0x6e,

  /**
   * Divide key.
   */
  Divide = 0x6f,

  /**
   * F1 key.
   */
  F1 = 0x70,

  /**
   * F2 key.
   */
  F2 = 0x71,

  /**
   * F3 key.
   */
  F3 = 0x72,

  /**
   * F4 key.
   */
  F4 = 0x73,

  /**
   * F5 key.
   */
  F5 = 0x74,

  /**
   * F6 key.
   */
  F6 = 0x75,

  /**
   * F7 key.
   */
  F7 = 0x76,

  /**
   * F8 key.
   */
  F8 = 0x77,

  /**
   * F9 key.
   */
  F9 = 0x78,

  /**
   * F10 key.
   */
  F10 = 0x79,

  /**
   * F11 key.
   */
  F11 = 0x7a,

  /**
   * F12 key.
   */
  F12 = 0x7b,

  /**
   * F13 key.
   */
  F13 = 0x7c,

  /**
   * F14 key.
   */
  F14 = 0x7d,

  /**
   * F15 key.
   */
  F15 = 0x7e,

  /**
   * F16 key.
   */
  F16 = 0x7f,

  /**
   * F17 key.
   */
  F17 = 0x80,

  /**
   * F18 key.
   */
  F18 = 0x81,

  /**
   * F19 key.
   */
  F19 = 0x82,

  /**
   * F20 key.
   */
  F20 = 0x83,

  /**
   * F21 key.
   */
  F21 = 0x84,

  /**
   * F22 key.
   */
  F22 = 0x85,

  /**
   * F23 key.
   */
  F23 = 0x86,

  /**
   * F24 key.
   */
  F24 = 0x87,

  /**
   * NUM LOCK key.
   */
  NumLock = 0x90,

  /**
   * SCROLL LOCK key.
   */
  ScrollLock = 0x91,

  /**
   * Left SHIFT key.
   */
  LeftShift = 0xa0,

  /**
   * Right SHIFT key.
   */
  RightShift = 0xa1,

  /**
   * Left CTRL key.
   */
  LeftCtrl = 0xa2,

  /**
   * Right CTRL key.
   */
  RightCtrl = 0xa3,

  /**
   * Left ALT key.
   */
  LeftAlt = 0xa4,

  /**
   * Right ALT key.
   */
  RightAlt = 0xa5,

  /**
   * Browser Back key.
   */
  BrowserBack = 0xa6,

  /**
   * Browser Forward key.
   */
  BrowserForward = 0xa7,

  /**
   * Browser Refresh key.
   */
  BrowserRefresh = 0xa8,

  /**
   * Browser Stop key.
   */
  BrowserStop = 0xa9,

  /**
   * Browser Search key.
   */
  BrowserSearch = 0xaa,

  /**
   * Browser Favorites key.
   */
  BrowserFavorites = 0xab,

  /**
   * Browser Start and Home key.
   */
  BrowserHome = 0xac,

  /**
   * Volume Mute key.
   */
  VolumeMute = 0xad,

  /**
   * Volume Down key.
   */
  VolumeDown = 0xae,

  /**
   * Volume Up key.
   */
  VolumeUp = 0xaf,

  /**
   * Next Track key.
   */
  MediaNextTrack = 0xb0,

  /**
   * Previous Track key.
   */
  MediaPrevTrack = 0xb1,

  /**
   * Stop Media key.
   */
  MediaStop = 0xb2,

  /**
   * Play/Pause Media key.
   */
  MediaPlayPause = 0xb3,

  /**
   * Start Mail key.
   */
  LaunchMail = 0xb4,

  /**
   * Select Media key.
   */
  LaunchMediaSelect = 0xb5,

  /**
   * Start Application 1 key.
   */
  LaunchApp1 = 0xb6,

  /**
   * Start Application 2 key.
   */
  LaunchApp2 = 0xb7,

  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the ';:' key.
   */
  Oem1 = 0xba,

  /**
   * For any country/region, the '+' key.
   */
  OemPlus = 0xbb,

  /**
   * For any country/region, the ',' key.
   */
  OemComma = 0xbc,

  /**
   * For any country/region, the '-' key.
   */
  OemMinus = 0xbd,

  /**
   * For any country/region, the '.' key.
   */
  OemPeriod = 0xbe,

  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the '/?' key.
   */
  Oem2 = 0xbf,

  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the '~' key.
   */
  Oem3 = 0xc0,

  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the '[\{' key.
   */
  Oem4 = 0xdb,

  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the '\|' key.
   */
  Oem5 = 0xdc,

  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the ']\}' key.
   */
  Oem6 = 0xdd,

  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   * For the US standard keyboard, the 'single-quote/double-quote' key.
   */
  Oem7 = 0xde,

  /**
   * Used for miscellaneous characters; it can vary by keyboard.
   */
  Oem8 = 0xdf,

  /**
   * Either the angle bracket key or the backslash key on the RT 102-key
   * keyboard.
   */
  Oem102 = 0xe2,

  /**
   * IME PROCESS key.
   */
  ProcessKey = 0xe5,

  /**
   * Attn key.
   */
  Attn = 0xf6,

  /**
   * CrSel key.
   */
  CrSel = 0xf7,

  /**
   * ExSel key.
   */
  ExSel = 0xf8,

  /**
   * Erase EOF key.
   */
  ErEof = 0xf9,

  /**
   * Play key.
   */
  Play = 0xfa,

  /**
   * Zoom key.
   */
  Zoom = 0xfb,

  /**
   * Reserved.
   */
  Noname = 0xfc,

  /**
   * PA1 key.
   */
  PA1 = 0xfd,

  /**
   * Clear key.
   */
  OemClear = 0xfe,
}
