import type { FbCallbacks } from "./fb-callbacks";
import type { FbConsole } from "./fb-console";
import type { FbGdi } from "./fb-gdi";
import type { FbPlaylistManager } from "./fb-playlist-manager";
import type { FbUtils } from "./fb-utils";
import type { FbWindow } from "./fb-window";
import type { FooBar } from "./foo-bar";
import type { IncludeOptions } from "./include-options";

/**
 * The {@link FbGlobal} interface represents `global` object.
 *
 * @public
 */
export interface FbGlobal extends Partial<FbCallbacks> {
  /**
   * @see console.
   */
  readonly console: FbConsole;

  /**
   * @see fb
   */
  readonly fb: FooBar;

  /**
   * @see gdi
   */
  readonly gdi: FbGdi;

  /**
   * Link to global this.
   */
  readonly global: FbGlobal;

  /**
   * @see plman
   */
  readonly plman: FbPlaylistManager;

  /**
   * @see utils
   */
  readonly utils: FbUtils;

  /**
   * @see window
   */
  readonly window: FbWindow;

  /**
   * The {@link FbGlobal.clearInterval} function cancels a timed, repeating
   * action which was previously established by a call to
   * {@link FbGlobal.setInterval}.
   *
   * @remarks
   * If the parameter provided does not identify a previously established action,
   *   this does nothing.
   *
   * @param intervalID - The identifier of the repeated action you want to
   *   cancel. This ID was returned by the corresponding call to
   *   {@link FbGlobal.setInterval}.
   *
   * @public
   */
  clearInterval(this: void, intervalID: number): void;

  /**
   * The {@link FbGlobal.clearTimeout} function cancels a timeout previously
   * established by calling {@link FbGlobal.setTimeout}.
   *
   * @remarks
   * If the parameter provided does not identify a previously established action,
   *   this does nothing.
   *
   * @param timeoutID - The identifier of the timeout you want to cancel. This
   *   ID was returned by the corresponding call to
   *   {@link FbGlobal.setInterval}.
   *
   * @public
   */
  clearTimeout(this: void, timeoutID: number): void;

  /**
   * The {@link FbGlobal.include} function evaluates the script in file.
   *
   * @example
   * ```ts
   *  include('samples/complete/properties.js');
   *  // include sample from `foo_spider_monkey_panel`
   * ```
   *
   * @remarks
   * Similar to `eval({@link utils.ReadTextFile}(path))`, but provides more
   * features:
   *
   *  - Has `include guards` - script won't be evaluated a second time if it was
   *    evaluated before in the same panel.
   *
   *  - Has script caching - script file will be read only once from filesystem
   *    (even if it is included from different panels).
   *
   *  - Has better error reporting.
   *
   * Note: when the relative `path` is used it will be searched in the following
   * paths:
   *
   *  - `${current_package_path}/scripts/${path}`, if the panel uses a package
   *    script.
   *
   *  - `${current_script_path}/${path}`, if the script is not a top-level
   *    `in-memory` script.
   *
   *  - `${fb.ComponentPath}/${path}`, otherwise.
   *
   * @param path - Absolute or relative path to JavaScript file.
   * @param options - Include options.
   *
   * @public
   */
  include(path: string, options?: IncludeOptions): void;

  /**
   * The {@link FbGlobal.setInterval} function repeatedly calls a with a fixed
   * time delay between each call.
   *
   * @param func - A to be executed every `delay` milliseconds. The
   *   first execution happens after `delay` milliseconds.
   * @param delay - The delay time between executions of the specified function
   *   or code, in milliseconds. Defaults to 0 if not specified.
   * @param args - Additional arguments which are passed through to
   *   the specified by `func` once the timer expires.
   *
   * @returns - A positive integer (typically within the range of `1` to
   *   `2,147,483,647`) that uniquely identifies the interval timer created by
   *   the call. This identifier, often referred to as an "interval ID", can be
   *   passed to {@link FbGlobal.clearInterval} to stop the repeated
   *   execution of the specified function.
   *
   * @public
   */
  setInterval<TArgs extends readonly unknown[]>(
    this: void,
    func: (...args: TArgs) => void,
    delay?: number,
    ...args: TArgs
  ): number;

  /**
   * The {@link FbGlobal.setTimeout} function sets a timer which executes a once
   * the timer expires.
   *
   * @param func - A to be executed after the timer expires.
   * @param delay - A non-negative integer indicating how long the timer should
   *   wait before the specified or code is executed, in milliseconds.
   *   Defaults to `0` if not specified.
   * @param args - Additional arguments which are passed through to the function
   *   specified by `func`.
   *
   * @returns - A positive integer (typically within the range of `1` to
   *   `2,147,483,647`) that uniquely identifies the timer created by the call.
   *   This identifier, often referred to as a "timeout ID", can be passed to
   *   {@link FbGlobal.clearTimeout} to cancel the timer.
   *
   * @public
   */
  setTimeout<TArgs extends readonly unknown[]>(
    this: void,
    func: (...args: TArgs) => void,
    delay?: number,
    ...args: TArgs
  ): number;
}
