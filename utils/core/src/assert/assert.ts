import type { ErrorLike } from "../error";
import { error } from "../error";
import type { NonFalsy } from "../falsy";
import { isNonFalsy } from "../falsy";
import { never } from "../never";

import { AssertError } from "./assert-error";

/**
 * The {@link assert} function tests if the passed {@link value} is truthy.
 *
 * If {@link value} is falsy, an `Error` is thrown.
 *
 * If the {@link message} parameter is omitted or `undefined`, a default
 * {@link AssertError} is assigned.
 *
 * If the {@link message} parameter is an instance of `Error` or function
 * which returns an instance of `Error`, then it will be thrown instead of the
 * {@link AssertError}.
 *
 * @example
 * ```ts
 *  const string = assert(stringOrUndefined)
 *
 *  string.concat('value passed')
 *
 *  if (assert(value === "foo", '{@link value} should be "foo"')) {
 *    // here some portion of the code that expects that value is "foo"
 *  }
 * ```
 *
 * @param value - The value to test to be truthy.
 * @param message - An {@link  ErrorLike} to get error if assertion is failed.
 *
 * @returns The passed value
 *
 * @throws {@link AssertError} if {@link message} is a string or omitted
 * @throws the passed {@link message} otherwise
 *
 * @public
 */
export function assert<TValue>(
  value: TValue,
  message: ErrorLike = "Assertion failed",
): NonFalsy<TValue> {
  return isNonFalsy(value) ? value : never(error(message, AssertError));
}
