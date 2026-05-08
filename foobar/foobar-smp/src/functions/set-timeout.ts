/**
 * The {@link setTimeout} function sets a timer which executes a once
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
 *   {@link clearTimeout} to cancel the timer.
 *
 * @public
 */
export declare function setTimeout<TArgs extends readonly unknown[]>(
  func: (...args: TArgs) => void,
  delay?: number,
  ...args: TArgs
): number;
