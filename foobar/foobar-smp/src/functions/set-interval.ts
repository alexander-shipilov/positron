/**
 * The {@link setInterval} function repeatedly calls a with a fixed
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
 *   passed to {@link clearInterval} to stop the repeated
 *   execution of the specified function.
 *
 * @public
 */
export declare function setInterval<TArgs extends readonly unknown[]>(
  func: (...args: TArgs) => void,
  delay?: number,
  ...args: TArgs
): number;
