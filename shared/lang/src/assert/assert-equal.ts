import type { ErrorParams } from "../error/error-params";

import { assertTrue } from "./assert-true";

/**
 * The {@link ASSERT_EQUAL_MESSAGE} constant represents the default error
 * message thrown by the {@link assertEqual} function.
 *
 * @public
 */
export const ASSERT_EQUAL_MESSAGE = "Equality assertion failed";

/**
 * The {@link assertEqual} function asserts whether the provided `value` is
 * strictly equal to the `expected` value. Returns the `value` if the assertion
 * passes, or throws an exception if it fails.
 *
 * @remarks
 *   The {@link assertEqual} function uses the `===` operator to check for
 *   equality.
 *
 *   The {@link assertSame} function works similarly to {@link assertEqual},
 *   but uses the `Object.is` function to check for equality.
 *
 *   The {@link assertSameZero} function works similarly to
 *   {@link assertEqual}, but uses the {@link isSameZero} function to check for
 *   equality.
 *
 * @example
 * ```ts
 *  assertEqual(1, 1);
 *  assertEqual(-0, 0);
 *  // OK
 *
 *  assertEqual(NaN, NaN);
 *  // throws
 * ```
 *
 * @param value - The value to assert for equality.
 *
 * @param expected - The expected value
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
export function assertEqual<TExpected>(
  value: unknown,
  expected: TExpected,
  ...errorParams: ErrorParams
): TExpected {
  assertTrue(
    value === expected,
    errorParams[0] ?? ASSERT_EQUAL_MESSAGE,
    errorParams[1],
  );

  return value as TExpected;
}
