import type { ErrorClass } from "./error-class";
import type { ErrorLike } from "./error-like";

/**
 * The {@link error} function creates an `Error` instance from the passed
 * {@link ErrorLike} value.
 *
 * @example
 * ```ts
 *  const error1 = error("Something went wrong");
 *  // instance of `Error`
 *
 *  const error2 = error(new SyntaxError())
 *  // instance of `SyntaxError`
 * ```
 *
 * @param message - A string or `Error` instance.
 * @param Class - The class to create instance of error if the passed
 *   {@link message} is not an instance of `Error`.
 *
 * @public
 */
export function error(message?: ErrorLike, Class: ErrorClass = Error): Error {
  return message instanceof Error ? message : new Class(message);
}
