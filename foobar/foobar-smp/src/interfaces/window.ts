import type {
  ColourTypeCui,
  ColourTypeDui,
  Cursor,
  DlgCode,
  FontTypeCui,
  FontTypeDui,
  UiType,
} from "../enums";
import type { PropertyValue } from "../types";

import type { FbTooltip } from "./fb-tooltip";
import type { GdiFont } from "./gdi-font";
import type { JsMemoryStats } from "./js-memory-stats";
import type { MenuObject } from "./menu-object";
import type { ScriptInfo } from "./script-info";
import type { ScriptOptions } from "./script-options";
import type { ThemeManager } from "./theme-manager";

/**
 * The {@link Window} interface contains functions for working with the current
 * SMP panel and accessing its properties.
 *
 * @public
 */
export interface Window {
  /**
   * The {@link Window.DlgCode} property indicates which keys should be
   * processed by the panel.
   *
   * ```ts
   *  window.DlgCode = DlgCode.WantAllKeys;
   * ```
   */
  DlgCode: DlgCode;

  /**
   * The {@link Window.Height} property contains panel height.
   */
  readonly Height: number;

  /**
   * The {@link Window.ID} property contains window handle cast to `uint32_t`.
   */
  readonly ID: number;

  /**
   * The {@link Window.InstanceType} property contains UI type.
   *
   * You need this to determine which GetFontXXX and GetColourXXX methods to
   * use, assuming you want to support both interfaces.
   */
  readonly InstanceType: UiType;

  /**
   * Only useful within Panel Stack Splitter (Columns UI component).
   * Depends on setting inside Spider Monkey Panel Configuration window.
   *
   * You generally use it to determine whether to draw a background.
   */
  readonly IsTransparent: boolean;

  /**
   * `true` if window is visible
   */
  readonly IsVisible: boolean;

  /**
   * The {@link Window.JsMemoryStats} property contains memory statistics for
   * JavaScript engine.
   */
  readonly JsMemoryStats: JsMemoryStats;

  /**
   * The {@link Window.MaxHeight}, {@link Window.MaxWidth},
   * {@link Window.MinHeight} and {@link Window.MinWidth} properties can be
   * used to lock the panel size.
   *
   * Do not use if panels are contained within Panel Stack Splitter (Columns UI
   * component).
   */
  MaxHeight: number;

  /**
   * See {@link Window.MaxHeight}.
   */
  MaxWidth: number;

  /**
   * The {@link Window.MemoryLimit} property returns maximum allowed memory
   * usage for the component (in bytes). If the total memory usage exceeds this
   * value, all panels will fail with OOM error.
   *
   * @deprecated use {@link Window.JsMemoryStats} instead.
   */
  readonly MemoryLimit: number;

  /**
   * See {@link Window.MaxHeight}.
   */
  MinHeight: number;

  /**
   * See {@link Window.MaxHeight}.
   */
  MinWidth: number;

  /**
   * The {@link Window.Name} property returns the panel name set in
   * {@link Window.ShowConfigureV2}.
   */
  readonly Name: string;

  /**
   * The {@link Window.PanelMemoryUsage} property returns memory usage of the
   * current panel (in bytes).
   *
   * @deprecated use {@link Window.JsMemoryStats} instead.
   */
  readonly PanelMemoryUsage: number;

  /**
   * The {@link Window.ScriptInfo} property contains an information about the
   * panel script.
   */
  readonly ScriptInfo: ScriptInfo;

  /**
   * The {@link Window.Tooltip} property returns associated tooltip object.
   */
  readonly Tooltip: FbTooltip;

  /**
   * The {@link Window.TotalMemoryUsage} property returns total memory usage of
   * all panels (in bytes).
   *
   * @deprecated use {@link Window.JsMemoryStats} instead.
   */
  readonly TotalMemoryUsage: number;

  /**
   * The {@link Window.Width} property contains panel width.
   */
  readonly Width: number;

  /**
   * See {@link GlobalThis.clearInterval}.
   *
   * @param timerId - The identifier of the repeated action you want to
   *   cancel.
   */
  ClearInterval(timerId: number): void;

  /**
   * See {@link GlobalThis.clearTimeout}.
   *
   * @param timerId - The identifier of the timeout you want to cancel.
   */
  ClearTimeout(timerId: number): void;

  /**
   * The {@link Window.CreatePopupMenu} method creates popup menu.
   *
   * todo: See
   *    samples\\basic\\MainMenuManager All-In-One.js,
   *    samples\\basic\\Menu Sample.js
   */
  CreatePopupMenu(): MenuObject;

  /**
   * The {@link Window.CreateThemeManager} method creates theme manger.
   * @see https://docs.microsoft.com/en-us/windows/win32/controls/parts-and-states
   *
   * todo: See
   *    samples\\basic\\SimpleThemedButton.js
   *
   * @param classId -
   */
  CreateThemeManager(classId: string): ThemeManager;

  /**
   * The {@link Window.CreateTooltip} method creates a tooltip.
   *
   * Note: a single panel can have only a single tooltip object.
   * Creating a new tooltip will replace the previous one.
   *
   * @param fontName - Tooltip font. Default `"Segoe UI"`.
   * @param fontSizePx - Tooltip font size in pixels. Default `12`.
   * @param fontStyle - Tooltip font style. Default `0`.
   *
   * @deprecated use {@link Window.Tooltip} and {@link FbTooltip.SetFont}
   *   instead.
   */
  CreateTooltip(
    fontName?: string,
    fontSizePx?: number,
    fontStyle?: number,
  ): FbTooltip;

  /**
   * The {@link Window.DefinePanel} method setups panel and script information
   * and available features. Can be called only once, so it's better to
   * define it directly in the panel Configure menu.
   *
   * @param name - Script name and panel name.
   * @param options - Options. Default `{}`.
   *
   * @deprecated use {@link Window.DefineScript} instead. Panel name can be
   *   changed via {@link Window.ShowConfigureV2}.
   */
  DefinePanel(name: string, options: ScriptOptions): void;

  /**
   * The {@link Window.DefineScript} method setups the script information.
   * Can be called only once for the whole panel.
   *
   * @param name - Script name
   * @param options - Options Default `{}`.
   */
  DefineScript(name: string, options: ScriptOptions): void;

  /**
   * The {@link Window.EditScript} method opens the current panel script in
   * the default text editor.
   *
   * Default text editor can be changed via `Edit` button on the main tab of
   * {@link Window.ShowConfigureV2}.
   */
  EditScript(): void;

  /**
   * The {@link Window.GetColourCUI} method returns a color from Columns UI.
   *
   * @param type - Color type
   * @param clientGuid - todo: add ColorCuiGuid enum.
   *   See `Flags.js` \> `Used in GetColourCUI() as client_guid`.
   *
   * @returns black colour if the requested one is not available.
   */
  GetColourCUI(type: ColourTypeCui, clientGuid?: string): number;

  /**
   * The {@link Window.GetColourDUI} method returns color from Default UI.
   *
   * @param type - Color type
   *
   * @returns black colour if the requested one is not available.
   */
  GetColourDUI(type: ColourTypeDui): number;

  /**
   * The {@link Window.GetFontCUI} method returns font from Columns UI.
   *
   * @param type - Font type.
   * @param clientGuid - todo: add FontCuiGuid enum.
   *   See `Flags.js` \> `Used in GetFontCUI() as client_guid`.
   *
   * @returns `null` if the requested font was not found.
   */
  GetFontCUI(type: FontTypeCui, clientGuid?: string): GdiFont;

  /**
   * The {@link Window.GetFontDUI} method returns font from Default UI.
   *
   * ```ts
   *  // To avoid errors when trying to use the font or access its properties,
   *  // you should use code something like this...
   *  let font = window.GetFontDUI(0);
   *
   *  if (!font) {
   *    console.log("Unable to determine font. Using Segoe UI instead.");
   *
   *    font = gdi.Font("Segoe UI", 12);
   *  }
   * ```
   *
   * @param type - Font type.
   *
   * @returns `null` if the requested font was not found.
   */
  GetFontDUI(type: FontTypeDui): GdiFont;

  /**
   * The {@link Window.GetProperty} method returns a value of property.
   * If property does not exist and `defaultValue` is not `undefined` and not
   * `null`, it will be created with the value of `defaultValue`.
   *
   * Note: leading and trailing whitespace are removed from property name.
   *
   * @param name - Property name
   * @param defaultValue - Default value
   */
  GetProperty(name: string, defaultValue?: PropertyValue): PropertyValue;

  /**
   * The {@link Window.NotifyOthers} method notifies other panels.
   * This will trigger {@link Callbacks.on_notify_data} in other panels.
   *
   * !!! Beware !!!: data passed via `info` argument must NOT be used or
   * modified in the source panel after invoking this method.
   *
   * ```ts
   *  let data = {
   *    // some data
   *  };
   *
   *  window.NotifyOthers('have_some_data', data);
   *
   *  data = null;
   *  // stop using the object immediately
   *  // AddSomeAdditionalValues(data);
   *  // don't try to modify it, since it will affect the object
   *  // in the other panel as well
   * ```
   *
   * @param name -
   * @param info - All variable / array / object types should be supported
   */
  NotifyOthers(name: string, info: unknown): void;

  /**
   * The {@link Window.Reload} method reloads panel.
   */
  Reload(): void;

  /**
   * The {@link Window.Repaint} method repaints window.
   *
   * Performance note: don't force the repaint unless it's really necessary -
   * repaint calls might be grouped up when *not forced* which will turn them
   * into a single repaint call, thus reducing the amount of
   * {@link Callbacks.on_paint} calls.
   *
   * @param force - If `true`, will repaint immediately, otherwise a
   *   repaint task will be *scheduled*. Default `false`.
   */
  Repaint(force?: boolean): void;

  /**
   * The {@link Window.RepaintRect} method repaints a part of the screen.
   * Use this instead of {@link Window.Repaint} on frequently updated areas
   * such as time, bitrate, seekbar, etc.
   *
   * Performance note: see Performance note in {@link Window.Repaint}.
   *
   * @param x -
   * @param y -
   * @param width -
   * @param height -
   * @param force - If `true`, will repaint immediately, otherwise a
   *   repaint task will be *scheduled*. Default `false`.
   */
  RepaintRect(
    x: number,
    y: number,
    width: number,
    height: number,
    force?: boolean,
  ): void;

  /**
   * This would usually be used inside the {@link Callbacks.on_mouse_move}
   * callback. Use {@link Cursor.Hidden} if you want to hide the cursor.
   *
   * @param id - Cursor id.
   */
  SetCursor(id: Cursor): void;

  /**
   * See {@link GlobalThis.setInterval}.
   *
   * @param func -
   * @param delay -
   */
  SetInterval(func: () => void, delay: number): number;

  /**
   * The {@link Window.SetProperty} method sets property value.
   * Property will be removed, if `value` is `undefined` or `null`.
   *
   * Property values are saved per panel instance and are remembered between
   * foobar2000 restarts.
   *
   * Note: leading and trailing whitespace are removed from property name.
   *
   * @param name - Property name
   * @param value - Property value. Pass `null` to remove an existing property.
   */
  SetProperty(name: string, value: null | PropertyValue | undefined): void;

  /**
   * See {@link GlobalThis.setTimeout}.
   *
   * @param func -
   * @param delay -
   */
  SetTimeout(func: () => void, delay: number): number;

  /**
   * The {@link Window.ShowConfigure} method shows configuration window of
   * current panel.
   *
   * @deprecated use {@link Window.ShowConfigureV2} to configure panel and
   *   {@link Window.EditScript} to edit script.
   */
  ShowConfigure(): void;

  /**
   * The {@link Window.ShowConfigureV2} method shows configuration window of the
   * current panel.
   */
  ShowConfigureV2(): void;

  /**
   * The {@link Window.ShowConfigureV2} method shows properties window of
   * current panel.
   */
  ShowProperties(): void;
}
