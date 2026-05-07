/**
 * Functions for working with the current SMP panel and accessing it's properties.
 *
 * @namespace
 */
export let window = {
  /**
   * Indicates which keys should be processed by the panel.<br>
   * See {@link https://docs.microsoft.com/en-us/windows/desktop/dlgbox/wm-getdlgcode} for more info.
   *
   * @return {number} See Flags.js > With window.DlgCode
   *
   * @example
   * window.DlgCode = DLGC_WANTALLKEYS;
   */
  DlgCode: undefined, // (uint) (read, write)

  /**
   * @type {number}
   * @readonly
   */
  Height: undefined, // (uint) (read)

  /**
   * Window handle casted to uint32_t.
   *
   * @type {number}
   * @readonly
   */
  ID: undefined, // (read) (uint)

  /**
   * You need this to determine which GetFontXXX and GetColourXXX methods to use, assuming you want to support both interfaces.<br>
   * <br>
   * 0 - if using Columns UI<br>
   * 1 - if using default UI.
   *
   * @type {number}
   * @readonly
   */
  InstanceType: undefined, // (uint)

  /**
   * Only useful within Panel Stack Splitter (Columns UI component)<br>
   * Depends on setting inside Spider Monkey Panel Configuration window. You generally use it to determine
   * whether or not to draw a background.
   *
   * @type {boolean}
   * @readonly
   */
  IsTransparent: undefined, // (boolean) (read)

  /**
   * Return value of {@link window.JsMemoryStats}.<br>
   *
   * @typedef {Object} JsMemoryStats
   * @property {number} MemoryUsage Memory usage of the current panel (in bytes)
   * @property {number} TotalMemoryUsage Total memory usage of all panels (in bytes)
   * @property {number} TotalMemoryLimit
   *    Maximum allowed memory usage for the component (in bytes).<br>
   *    If the total memory usage exceeds this value, all panels will fail with OOM error.
   */

  /**
   * @type {boolean}
   * @readonly
   */
  IsVisible: undefined, // (boolean) (read)

  /**
   * Get memory statistics for JavaScript engine.
   *
   * @type {JsMemoryStats}
   * @readonly
   */
  JsMemoryStats: undefined,

  /**
   * {@link window.MaxHeight}, {@link window.MaxWidth}, {@link window.MinHeight} and {@link window.MinWidth} can be used to lock the panel size.<br>
   * Do not use if panels are contained within Panel Stack Splitter (Columns UI component).
   *
   * @type {number}
   */
  MaxHeight: undefined, // (uint) (read, write)

  /**
   * See {@link window.MaxHeight}.
   *
   * @type {number}
   */
  MaxWidth: undefined, // (uint) (read, write)

  /**
   * Maximum allowed memory usage for the component (in bytes).<br>
   * If the total memory usage exceeds this value, all panels will fail with OOM error.<br>
   * <br>
   * Deprecated: use {@link window.JsMemoryStats.total_memory_limit} instead.
   *
   * @deprecated
   *
   * @type {number}
   * @readonly
   */
  MemoryLimit: undefined, // (uint) (read)

  /**
   * See {@link window.MaxHeight}.
   *
   * @type {number}
   */
  MinHeight: undefined, // (uint) (read, write)

  /**
   * See {@link window.MaxHeight}.
   *
   * @type {number}
   */
  MinWidth: undefined, // (uint) (read, write)

  /**
   * Returns the panel name set in {@link window.ShowConfigureV2}.
   *
   * @type {string}
   * @readonly
   */
  Name: undefined, // (string) (read)

  /**
   * Memory usage of the current panel (in bytes).<br>
   * <br>
   * Deprecated: use {@link window.JsMemoryStats.memory_usage} instead.
   *
   * @deprecated
   *
   * @type {number}
   * @readonly
   */
  PanelMemoryUsage: undefined, // (uint) (read)

  /**
   * Return value of {@link window.ScriptInfo}.<br>
   * Note: package_id is only present when the panel script is a package.
   *
   * @typedef {Object} ScriptInfo
   * @property {string} Name
   * @property {string} [Author]
   * @property {string} [Version]
   * @property {string} [PackageId]
   */

  /**
   * Information about the panel script.
   *
   * @type {ScriptInfo}
   * @readonly
   */
  ScriptInfo: undefined,

  /**
   * Get associated tooltip object.
   *
   * @type {FbTooltip}
   * @readonly
   */
  Tooltip: undefined,

  /**
   * Total memory usage of all panels (in bytes).<br>
   * <br>
   * Deprecated: use {@link window.JsMemoryStats.total_memory_usage} instead.
   *
   * @deprecated
   *
   * @type {number}
   * @readonly
   */
  TotalMemoryUsage: undefined, // (uint) (read)

  /**
   * @type {number}
   * @readonly
   */
  Width: undefined, // (uint) (read)

  /**
   * See {@link clearInterval}.
   *
   * @param {number} timerID
   */
  ClearInterval(timerID) {}, // (void)

  /**
   * See {@link clearTimeout}.
   *
   * @param {number} timerID
   */
  ClearTimeout(timerID) {}, // (void)

  /**
   * @return {MenuObject}
   *
   * @example
   * // See `samples/basic/MainMenuManager All-In-One.js`, `samples/basic/Menu Sample.js`
   */
  CreatePopupMenu() {}, // (MenuObject)

  /**
   * @param {string} class_id {@link https://docs.microsoft.com/en-us/windows/win32/controls/parts-and-states}
   * @return {ThemeManager}
   *
   * @example
   * // See `samples/basic/SimpleThemedButton.js`
   */
  CreateThemeManager(class_id) {}, // (ThemeManager)

  /**
   * Note: a single panel can have only a single tooltip object.
   * Creating a new tooltip will replace the previous one.<br>
   * <br>
   * Deprecated: use {@link fb.Tooltip} and {@link FbTooltip.SetFont} instead.
   *
   * @deprecated
   *
   * @param {string=} [font_name='Segoe UI']
   * @param {number=} [font_size_px=12]
   * @param {number=} [font_style=0] See Flags.js > FontStyle
   * @return {FbTooltip}
   */
  CreateTooltip(font_name, font_size_px, font_style) {}, // (FbTooltip) [font_name][, font_size_px][, font_style]

  /**
   * Setups panel and script information and available features.<br>
   * Can be called only once, so it's better to define it
   * directly in the panel Configure menu.<br>
   * <br>
   * Deprecated: use {@link window.DefineScript} instead.
   * Panel name can be changed via {@link window.ShowConfigureV2}.
   *
   * @deprecated
   *
   * @param {string} name Script name and panel name
   * @param {object=} [options={}]
   * @param {string=} [options.author=''] Script author
   * @param {string=} [options.version=''] Script version
   * @param {object=} [options.features=undefined] Additional script features
   * @param {boolean=} [options.features.drag_n_drop=false] Indicates if drag_n_drop functionality should be enabled
   */
  DefinePanel(name, options) {}, // (void)

  /**
   * Setup the script information.<br>
   * Can be called only once for the whole panel.
   *
   * @param {string} name Script name
   * @param {object=} [options={}]
   * @param {string=} [options.author=''] Script author
   * @param {string=} [options.version=''] Script version
   * @param {object=} [options.features=undefined] Additional script features
   * @param {boolean=} [options.features.drag_n_drop=false] Indicates if drag_n_drop functionality should be enabled
   * @param {boolean=} [options.features.grab_focus=true] Indicates if panel should grab mouse focus
   */
  DefineScript(name, options) {}, // (void)

  /**
   * Open the current panel script in the default text editor.<br>
   * Default text editor can be changed via `Edit` button on the main tab of {@link window.ShowConfigureV2}.
   */
  EditScript() {},

  /**
   * @param {number} type See Flags.js > Used in window.GetColourXXX()
   * @param {string=} client_guid See Flags.js > Used in GetColourCUI() as client_guid.
   * @return {number} returns black colour if the requested one is not available.
   */
  GetColourCUI(type, client_guid) {}, // (uint) [, client_guid]

  /**
   * @param {number} type
   * @return {number} returns black colour if the requested one is not available.
   */
  GetColourDUI(type) {}, // (uint)

  /**
   * Note: see the example in {@link window.GetFontDUI}.
   *
   * @param {number} type See Flags.js > Used in window.GetFontXXX()
   * @param {string=} client_guid See Flags.js > Used in GetFontCUI() as client_guid.
   * @return {?GdiFont} returns null if the requested font was not found.
   */
  GetFontCUI(type, client_guid) {}, // (GdiFont) [, client_guid]

  /**
   * @param {number} type See Flags.js > Used in window.GetFontXXX()
   * @return {?GdiFont} returns null if the requested font was not found.
   *
   * @example
   * // To avoid errors when trying to use the font or access its properties, you
   * // should use code something like this...
   * let font = window.GetFontDUI(0);
   * if (!font) {
   *    console.log("Unable to determine your default font. Using Segoe UI instead.");
   *    font = gdi.Font("Segoe UI", 12);
   * }
   */
  GetFontDUI(type) {}, // (GdiFont)

  /**
   * Get value of property.<br>
   * If property does not exist and default_val is not undefined and not null,
   * it will be created with the value of default_val.<br>
   * <br>
   * Note: leading and trailing whitespace are removed from property name.
   *
   * @param {string} name
   * @param {*=} default_val
   * @return {*}
   */
  GetProperty(name, default_val) {}, // (VARIANT) [, default_val]

  /**
   * This will trigger {@link module:callbacks~on_notify_data on_notify_data}(name, info) in other panels.<br>
   * <b>!!! Beware !!!</b>: data passed via `info` argument must NOT be used or modified in the source panel after invoking this method.
   *
   * @param {string} name
   * @param {*} info
   *
   * @example
   * let data = {
   *    // some data
   * };
   * window.NotifyOthers('have_some_data', data);
   *
   * data = null; // stop using the object immediately
   * // AddSomeAdditionalValues(data); // don't try to modify it, since it will affect the object in the other panel as well
   */
  NotifyOthers(name, info) {}, // (void)

  /**
   * Reload panel.
   * @method
   */
  Reload() {}, // (void)

  /**
   * Performance note: don't force the repaint unless it's really necessary -
   * repaint calls might be grouped up when *not forced* which will turn them into a single repaint call,
   * thus reducing the amount of {@link module:callbacks~on_paint on_paint} calls.
   *
   * @param {boolean=} [force=false] If true, will repaint immediately, otherwise a repaint task will be *scheduled*.
   */
  Repaint(force) {}, // (void) [force]

  /**
   * Repaints a part of the screen.<br>
   * Use this instead of {@link window.Repaint} on frequently updated areas
   * such as time, bitrate, seekbar, etc.<br>
   * <br>
   * Performance note: see Performance note in {@link window.Repaint}.
   *
   * @param {number} x
   * @param {number} y
   * @param {number} w
   * @param {number} h
   * @param {boolean=} [force=false] If true, will repaint immediately, otherwise a repaint task will be *scheduled*.
   */
  RepaintRect(x, y, w, h, force) {}, // (void) [force]

  /**
   * This would usually be used inside the {@link module:callbacks~on_mouse_move on_mouse_move} callback.<br>
   * Use -1 if you want to hide the cursor.
   *
   * @param {number} id See Flags.js > Used in window.SetCursor()
   */
  SetCursor(id) {}, // (void)

  /**
   * See {@link setInterval}.
   *
   * @param {function()} func
   * @param {number} delay
   *
   * @return {number}
   */
  SetInterval(func, delay) {}, // (uint)

  /**
   * Set property value.<br>
   * Property will be removed, if val is undefined or null.<br>
   * <br>
   * Property values are saved per panel instance and are remembered between foobar2000 restarts.<br>
   * <br>
   * Note: leading and trailing whitespace are removed from property name.
   *
   * @param {string} name
   * @param {*=} val
   */
  SetProperty(name, val) {}, // (void)

  /**
   * See {@link setTimeout}.
   *
   * @param {function()} func
   * @param {number} delay
   *
   * @return {number}
   */
  SetTimeout(func, delay) {}, // (uint)

  /**
   * Show configuration window of current panel.
   * <br>
   * Deprecated: use {@link window.ShowConfigureV2} to configure panel and {@link window.EditScript} to edit script.
   *
   * @deprecated
   *
   * @method
   */
  ShowConfigure() {}, // (void)

  /**
   * Show configuration window of current panel
   * @method
   */
  ShowConfigureV2() {}, // (void)

  /**
   * Show properties window of current panel
   * @method
   */
  ShowProperties() {}, // (void)
};
