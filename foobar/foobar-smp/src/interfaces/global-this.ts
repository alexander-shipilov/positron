import type { PartialOptional } from "@positron/core";

import type { ActiveXObjectConstructor } from "./active-x-object-constructor";
import type { Callbacks } from "./callbacks";
import type { Console } from "./console";
import type { EnumeratorConstructor } from "./enumerator-constructor";
import type { Fb } from "./fb";
import type { FbMetadbHandleListConstructor } from "./fb-metadb-handle-list-constructor";
import type { FbProfilerConstructor } from "./fb-profiler-constructor";
import type { FbTitleFormatConstructor } from "./fb-title-format-constructor";
import type { Gdi } from "./gdi";
import type { GdiBitmapConstructor } from "./gdi-bitmap-constructor";
import type { GdiFontConstructor } from "./gdi-font-constructor";
import type { IncludeOptions } from "./include-options";
import type { Plman } from "./plman";
import type { Utils } from "./utils";
import type { Window } from "./window";

/**
 * @public
 */
export interface GlobalThis extends PartialOptional<Callbacks> {
  /**
   *
   */
  readonly ActiveXObject: ActiveXObjectConstructor;

  /**
   * Console.
   */
  readonly console: Console;

  /**
   *
   */
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  readonly Enumerator: EnumeratorConstructor;

  /**
   * FooBar.
   */
  readonly fb: Fb;

  /**
   *
   */
  readonly FbMetadbHandleList: FbMetadbHandleListConstructor;

  /**
   *
   */
  readonly FbProfiler: FbProfilerConstructor;

  /**
   *
   */
  readonly FbTitleFormat: FbTitleFormatConstructor;

  /**
   * GDI.
   */
  readonly gdi: Gdi;

  /**
   *
   */
  readonly GdiBitmap: GdiBitmapConstructor;

  /**
   *
   */
  readonly GdiFont: GdiFontConstructor;

  /**
   *
   */
  readonly globalThis: GlobalThis;

  /**
   * Playlist manager.
   */
  readonly plman: Plman;

  /**
   * Utilities.
   */
  readonly utils: Utils;

  /**
   * Window.
   */
  readonly window: Window;

  /**
   * The {@link GlobalThis.clearInterval} method cancels a timed, repeating
   * action which was previously established by a call to
   * {@link GlobalThis.setInterval}. If the parameter provided does not
   * identify a previously established action, this does nothing.
   *
   * @param intervalID - The identifier of the repeated action you want to
   *   cancel. This ID was returned by the corresponding call to
   *   {@link GlobalThis.setInterval}.
   *
   * @public
   */
  clearInterval(intervalID: number): void;

  /**
   * The {@link GlobalThis.clearTimeout} method cancels a timeout previously
   * established by calling {@link GlobalThis.setTimeout}. If the parameter
   * provided does not identify a previously established action, this does
   * nothing.
   *
   * @param timeoutID - The identifier of the timeout you want to cancel. This
   *   ID was returned by the corresponding call to
   *   {@link GlobalThis.setInterval}.
   *
   * @public
   */
  clearTimeout(timeoutID: number): void;

  /**
   * The {@link GlobalThis.include} method evaluates the script in file.
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
  include(path: string, options?: IncludeOptions): void;

  /**
   * The {@link GlobalThis.setInterval} method repeatedly calls a with a fixed
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
   *   passed to {@link GlobalThis.clearInterval} to stop the repeated
   *   execution of the specified function.
   */
  setInterval<TArgs extends readonly unknown[]>(
    func: (...args: TArgs) => void,
    delay?: number,
    ...args: TArgs
  ): number;

  /**
   * The {@link GlobalThis.setTimeout} method sets a timer which executes a once
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
   *   {@link GlobalThis.clearTimeout} to cancel the timer.
   */
  setTimeout<TArgs extends readonly unknown[]>(
    func: (...args: TArgs) => void,
    delay?: number,
    ...args: TArgs
  ): number;
}
