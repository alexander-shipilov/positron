import type {
  ActiveXObjectConstructor,
  Console,
  Fb,
  FbMetadbHandleListConstructor,
  FbProfilerConstructor,
  FbTitleFormatConstructor,
  Gdi,
  GdiBitmapConstructor,
  GdiFontConstructor,
  GlobalThis,
  IncludeOptions,
  Plman,
  Utils,
  Window,
} from "./interfaces";

declare global {
  /**
   * Console.
   */
  const console: Console;

  /**
   * FooBar.
   */
  const fb: Fb;

  /**
   * GDI.
   */
  const gdi: Gdi;

  /**
   * Playlist manager.
   */
  const plman: Plman;

  /**
   * Global `this` object.
   */
  // eslint-disable-next-line no-shadow-restricted-names
  const globalThis: GlobalThis;

  /**
   * Utilities.
   */
  const utils: Utils;

  /**
   * Window.
   */
  const window: Window;

  /**
   *
   */
  const ActiveXObject: ActiveXObjectConstructor;

  /**
   *
   */
  const FbMetadbHandleList: FbMetadbHandleListConstructor;

  /**
   *
   */
  const FbProfiler: FbProfilerConstructor;

  /**
   *
   */
  const FbTitleFormat: FbTitleFormatConstructor;

  /**
   *
   */
  const GdiBitmap: GdiBitmapConstructor;

  /**
   *
   */
  const GdiFont: GdiFontConstructor;

  /**
   * The {@link clearInterval} function cancels a timed, repeating action which
   * was previously established by a call to {@link setInterval}. If the
   * parameter provided does not identify a previously established action, this
   * function does nothing.
   *
   * @param intervalID - The identifier of the repeated action you want to
   *   cancel. This ID was returned by the corresponding call to
   *   {@link setInterval}.
   *
   * @public
   */
  function clearInterval(intervalID: number): void;

  /**
   * The {@link clearTimeout} function cancels a timeout previously established
   * by calling {@link setTimeout}. If the parameter provided does not identify
   * a previously established action, this function does nothing.
   *
   * @param timeoutID - The identifier of the timeout you want to cancel. This
   *   ID was returned by the corresponding call to
   *   {@link setInterval}.
   *
   * @public
   */
  function clearTimeout(timeoutID: number): void;

  /**
   * The {@link include} function evaluates the script in file.
   *
   * Similar to `eval({@link utils.ReadTextFile}(path))`, but provides more
   * features:
   *  - Has `include guards` - script won't be evaluated a second time if it was
   *    evaluated before in the same panel.
   *  - Has script caching - script file will be read only once from filesystem
   *    (even if it is included from different panels).
   *  - Has better error reporting.
   *
   * Note: when the relative `path` is used it will be searched in the following
   * paths:
   *  - `${current_package_path}/scripts/${path}`, if the panel uses a package
   *    script.
   *  - `${current_script_path}/${path}`, if the script is not a top-level
   *    `in-memory` script.
   *  - `${fb.ComponentPath}/${path}`, otherwise.
   *
   * ```ts
   *  include('samples/complete/properties.js');
   *  // include sample from `foo_spider_monkey_panel`
   * ```
   *
   * @param path - Absolute or relative path to JavaScript file.
   * @param options - Include options.
   *
   * @public
   */
  function include(path: string, options?: IncludeOptions): void;

  /**
   * The {@link setInterval} function repeatedly calls a function with a fixed
   * time delay between each call.
   *
   * @param func - A function to be executed every `delay` milliseconds. The
   *   first execution happens after `delay` milliseconds.
   * @param delay - The delay time between executions of the specified function
   *   or code, in milliseconds. Defaults to 0 if not specified.
   * @param args - Additional arguments which are passed through to
   *   the function specified by `func` once the timer expires.
   *
   * @returns - A positive integer (typically within the range of `1` to
   *   `2,147,483,647`) that uniquely identifies the interval timer created by
   *   the call. This identifier, often referred to as an "interval ID", can be
   *   passed to {@link clearInterval} to stop the repeated execution of the
   *   specified function.
   */
  function setInterval<TArgs extends readonly unknown[]>(
    func: (...args: TArgs) => void,
    delay?: number,
    ...args: TArgs
  ): number;

  /**
   * The {@link setTimeout} function sets a timer which executes a function once
   * the timer expires.
   *
   * @param func - A function to be executed after the timer expires.
   * @param delay - A non-negative integer indicating how long the timer should
   *   wait before the specified function or code is executed, in milliseconds.
   *   Defaults to `0` if not specified.
   * @param args - Additional arguments which are passed through to the function
   *   specified by `func`.
   *
   * @returns - A positive integer (typically within the range of `1` to
   *   `2,147,483,647`) that uniquely identifies the timer created by the call.
   *   This identifier, often referred to as a "timeout ID", can be passed to
   *   {@link clearTimeout} to cancel the timer.
   */
  function setTimeout<TArgs extends readonly unknown[]>(
    func: (...args: TArgs) => void,
    delay?: number,
    ...args: TArgs
  ): number;
}
