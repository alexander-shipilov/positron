import type { ErrorParams } from "../error/error-params";
import { never } from "../never/never";

import { AssertException } from "./assert-exception";

/**
 * The {@link ASSERT_MESSAGE} constant represents the default error
 * message thrown by the {@link assert} function.
 *
 * @public
 */
export const ASSERT_MESSAGE = "Assertion failed";

/**
 * The {@link assert} function asserts if the passed `value` satisfies to
 * the specified `predicate`. Returns the `value` if the assertion passes, or
 * throws an exception if it fails.
 *
 * @example
 * ```ts
 *  assert([], (value) => value.length === 0);
 *  // OK
 *
 *  assert([], (value) => value.length !== 0);
 *  // throws
 * ```
 *
 * @param value - The value to assert.
 *
 * @param predicate - The predicate function to test the given `value`.
 *
 * @param errorParams - The parameters that will be passed to the {@link error}
 *   function to create an error if the assertion fails.
 *
 * @returns The passed `value`.
 *
 * @throws {@link AssertException} by default, or an error created using the
 *   {@link error} function.
 *
 * @public
 */
export function assert<TValue>(
  value: TValue,
  predicate: (value: TValue) => boolean,
  ...errorParams: ErrorParams
): TValue {
  return predicate(value)
    ? value
    : never(
        errorParams[0] ?? ASSERT_MESSAGE,
        errorParams[1] ?? AssertException,
      );
}
