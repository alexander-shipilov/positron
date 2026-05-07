/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
/**
 * @public
 */
export enum SystemColor {
  /**
   * Scroll bar gray area.
   */
  Scrollbar = 0,

  /**
   * Desktop.
   */
  Background = 1,

  /**
   * Desktop.
   */
  Desktop = 1,

  /**
   * Active window title bar.
   * The associated foreground color is {@link SystemColor.CaptionText}
   * Specifies the left side color in the color gradient of an active window's
   * title bar if the gradient effect is enabled.
   */
  ActiveCaption = 2,

  /**
   * Inactive window caption.
   * The associated foreground color is {@link SystemColor.InactiveCaptionText}.
   * Specifies the left side color in the color gradient of an inactive
   * window's title bar if the gradient effect is enabled.
   */
  InactiveCaption = 3,

  /**
   * Menu background.
   * The associated foreground color is {@link SystemColor.MenuText}.
   */
  Menu = 4,

  /**
   * Window background.
   * The associated foreground colors are {@link SystemColor.WindowText}
   * and {@link SystemColor.HotLight}.
   */
  Window = 5,

  /**
   * Window frame.
   */
  WindowFrame = 6,

  /**
   * Text in menus.
   * The associated background color is {@link SystemColor.Menu}.
   */
  MenuText = 7,

  /**
   * Text in windows.
   * The associated background color is {@link SystemColor.Window}.
   */
  WindowText = 8,

  /**
   * Text in caption, size box, and scroll bar arrow box.
   * The associated background color is {@link SystemColor.ActiveCaption}.
   */
  CaptionText = 9,

  /**
   * Active window border.
   */
  ActiveBorder = 10,

  /**
   * Inactive window border.
   */
  InactiveBorder = 11,

  /**
   * Background color of multiple document interface (MDI) applications.
   */
  AppWorkSpace = 12,

  /**
   * Item(s) selected in a control.
   * The associated foreground color is {@link SystemColor.HighLightText}.
   */
  HighLight = 13,

  /**
   * Text of item(s) selected in a control.
   * The associated background color is {@link SystemColor.HighLight}
   */
  HighLightText = 14,

  /**
   * Face color for three-dimensional display elements and for dialog box
   * backgrounds.
   */
  Face3D = 15,

  /**
   * Face color for three-dimensional display elements and for dialog box
   * backgrounds. The associated foreground color is
   * {@link SystemColor.ButtonText}.
   */
  ButtonFace = 15,

  /**
   * Shadow color for three-dimensional display elements (for edges facing away
   * from the light source).
   */
  Shadow3D = 16,

  /**
   * Shadow color for three-dimensional display elements (for edges facing away
   * from the light source).
   */
  ButtonShadow = 16,

  /**
   * Grayed (disabled) text. This color is set to 0 if the current display
   * driver does not support a solid gray color.
   */
  GrayedText = 17,

  /**
   * Text on push buttons. The associated background color is
   * {@link SystemColor.ButtonFace}.
   */
  ButtonText = 18,

  /**
   * Color of text in an inactive caption.
   * The associated background color is {@link SystemColor.InactiveCaption}.
   */
  InactiveCaptionText = 19,

  /**
   * Highlight color for three-dimensional display elements (for edges facing
   * the light source.)
   */
  HighLight3D = 20,

  /**
   * Highlight color for three-dimensional display elements (for edges facing
   * the light source.)
   */
  ButtonHighLight = 20,

  /**
   * Dark shadow for three-dimensional display elements.
   */
  DarkShadow3D = 21,

  /**
   * Light color for three-dimensional display elements (for edges facing the
   * light source.)
   */
  Light3D = 22,

  /**
   * Text color for tooltip controls.
   * The associated background color is {@link SystemColor.InfoBackground}.
   */
  InfoText = 23,

  /**
   * Background color for tooltip controls.
   * The associated foreground color is {@link SystemColor.InfoText}.
   */
  InfoBackground = 24,

  /**
   * Color for a hyperlink or hot-tracked item.
   * The associated background color is {@link SystemColor.Window}.
   */
  HotLight = 26,

  /**
   * Right side color in the color gradient of an active window's title bar.
   * {@link SystemColor.ActiveCaption} specifies the left side color.
   */
  GradientActiveCaption = 27,

  /**
   * Right side color in the color gradient of an inactive window's title bar.
   * {@link SystemColor.InactiveCaption} specifies the left side color.
   */
  GradientInactiveCaption = 28,

  /**
   * The color used to highlight menu items when the menu appears as a flat
   * menu. The highlighted menu item is outlined with
   * {@link SystemColor.HighLight}. Windows 2000:  This value is not supported.
   */
  MenuHighLight = 29,

  /**
   * The background color for the menu bar when menus appear as flat menus (see
   * SystemParametersInfo). However, {@link SystemColor.Menu} continues to
   * specify the background color of the menu popup. Windows 2000:  This value
   * is not supported.
   */
  MenuBar = 30,
}
