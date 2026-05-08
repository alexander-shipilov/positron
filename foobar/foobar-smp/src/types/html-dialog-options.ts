/**
 * @public
 */
export interface HtmlDialogOptions {
  /**
   * If `true` and if `x` and `y` are not set, will center window relative to
   * fb2000 position.
   */
  readonly center: boolean;

  /**
   * If `true`, will enable right-click context menu.
   */
  readonly context_menu: boolean;

  /**
   * The {@link HtmlDialogOptions.data} property will be saved in
   * `window.external.dialogArguments` and can be accessed from JavaScript
   * executed inside HTML window. This data is read-only and should not be
   * modified.
   *
   * May contain only the following types:
   *  - Basic types: number, string, boolean, `null`, `undefined`.
   *  - Objects as string: the only way to pass objects is to convert them to
   *    string and back with `JSON.stringify()` and `JSON.parse()`.
   *  - Arrays: must be cast via `.toArray()` inside html. Each element has
   *    same type limitations as {@link HtmlDialogOptions.data}.
   *  - Functions: has maximum of 7 arguments. Each argument has same type
   *    limitations as {@link HtmlDialogOptions.data}.
   */
  readonly data: unknown;

  /**
   * The {@link HtmlDialogOptions.height} property contains a window height.
   */
  readonly height: number;

  /**
   * If `true`, will allow to resize the window.
   */
  readonly resizable: boolean;

  /**
   * If `true`, will display scrollbars.
   */
  readonly scroll: boolean;

  /**
   * If `true`, will allow to select everything (label texts, buttons, etc.).
   */
  readonly selection: boolean;

  /**
   * The {@link HtmlDialogOptions.height} property contains a window width
   */
  readonly width: number;

  /**
   * The {@link HtmlDialogOptions.x} property contains window horizontal
   * position relative to desktop
   */
  readonly x: number;

  /**
   * The {@link HtmlDialogOptions.y} property contains window vertical
   * position relative to desktop
   */
  readonly y: number;
}
