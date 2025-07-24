import type { ErrorLike } from "../error";
import type { NonFalsy } from "../falsy";
import { error } from "../error";
import { isNonFalsy } from "../falsy";
import { never } from "../never";

import { AssertException } from "./assert-exception";

/**
 * The {@link assert} function tests if the passed {@link value} is truthy.
 *
 * If {@link value} is falsy, an `Error` is thrown.
 *
 * If the {@link message} parameter is omitted or `undefined`, a default
 * {@link AssertException} is assigned.
 *
 * If the {@link message} parameter is an instance of `Error` or function
 * which returns an instance of `Error`, then it will be thrown instead of the
 * {@link AssertException}.
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
 * @throws {@link AssertException} if {@link message} is a string or omitted
 * @throws the passed {@link message} otherwise
 *
 * @public
 */
export function assert<TValue>(
  value: TValue,
  message: ErrorLike = "Assertion failed",
): NonFalsy<TValue> {
  return isNonFalsy(value) ? value : never(error(message, AssertException));
}
