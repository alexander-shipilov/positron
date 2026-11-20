import type { ErrorParams } from "../error/error-params";
import { isSame } from "../utility/is-same";

import { assertTrue } from "./assert-true";

/**
 * The {@link ASSERT_SAME_MESSAGE} constant represents the default error
 * message thrown by the {@link assertSame} function.
 *
 * @public
 */
export const ASSERT_SAME_MESSAGE = "Same-value equality assertion failed";

/**
 * The {@link assertSame} function determines whether the provided `value` is
 * the same as the `expected` value. Returns the `value` if the assertion
 * passes, or throws an exception if it fails.
 *
 * @remarks
 *   The {@link assertSame} function uses same-value equality algorithm
 *   (`Object.is`) to check for equality.
 *
 *   The {@link assertEqual} function works similarly to {@link assertSame},
 *   but uses `===` operator to check for equality.
 *
 *   The {@link assertSameZero} function works similarly to
 *   {@link assertSame}, but uses the {@link isSameZero} function to check for
 *   equality.
 *
 * @example
 * ```ts
 *  asserSame(1, 1);
 *  asserSame(NaN, NaN);
 *  // OK
 *
 *  asserSame(-0, 0);
 *  // throws
 * ```
 *
 * @param value - The value to assert for equality to `expected`.
 *
 * @param expected - The expected value.
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
export function assertSame<TExpected>(
  value: unknown,
  expected: TExpected,
  ...errorParams: ErrorParams
): TExpected {
  assertTrue(
    isSame(value, expected),
    errorParams[0] ?? ASSERT_SAME_MESSAGE,
    errorParams[1],
  );

  return value as TExpected;
}
