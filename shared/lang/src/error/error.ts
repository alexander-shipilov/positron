import { isFunction } from "../function/is-function";

import type { ErrorClass } from "./error-class";
import type { ErrorMessage } from "./error-message";

/**
 * The {@link error} function creates an `Error` instance from the passed
 * `message` and `ErrorClass`.
 *
 * @example
 * ```ts
 *  const error1 = error("Something went wrong");
 *  console.log(error1 instanceof Error);
 *  // >> `true`
 *
 *  const error2 = error("Something went wrong", TypeError);
 *  console.log(error2 instanceof TypeError);
 *  // >> `true
 * ```
 *
 * @param message - An error message or a function to generate it.
 *
 * @param ErrorClass - The class to create an instance of error.
 *
 * @public
 */
export function error(message?: ErrorMessage, ErrorClass?: ErrorClass): Error {
  const errorLike = isFunction(message) ? message() : message;

  return errorLike instanceof Error
    ? errorLike
    : new (ErrorClass ?? Error)(errorLike);
}
