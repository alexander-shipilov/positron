import type { ErrorParams } from "../error/error-params";
import { isSameZero } from "../utility/is-same-zero";

import { assertTrue } from "./assert-true";

/**
 * The {@link ASSERT_SAME_ZERO_MESSAGE} constant represents the default error
 * message thrown by the {@link assertSameZero} function.
 *
 * @public
 */
export const ASSERT_SAME_ZERO_MESSAGE =
  "Same-value-zero equality assertion failed";

/**
 * The {@link assertSameZero} function determines whether the provided
 * `value` is the same as the `expected` value. Returns the `value` if the
 * assertion passes, or throws an exception if it fails.
 *
 * @remarks
 *   The {@link assertSameZero} function uses same-value-zero equality
 *   algorithm to check for equality. This algorithm works like strict equality
 *   `===` (where `-0` and `+0` are considered equal), with the exception that
 *   `NaN` is considered equal to itself.
 *
 *   The {@link assertEqual} function works similarly to
 *   {@link assertSameZero}, but uses `===` operator to check for equality.
 *
 *   The {@link assertSame} function works similarly to
 *   {@link assertSameZero}, but uses the `Object.is` function to check
 *   for equality.
 *
 * @example
 * ```ts
 *  assertSameZero(1, 1);
 *  assertSameZero(NaN, NaN);
 *  assertSameZero(-0, 0);
 *  // OK
 * ```
 *
 * @param value - The value to asser for equality to `expected`.
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
export function assertSameZero<TExpected>(
  value: unknown,
  expected: TExpected,
  ...errorParams: ErrorParams
): TExpected {
  assertTrue(
    isSameZero(value, expected),
    errorParams[0] ?? ASSERT_SAME_ZERO_MESSAGE,
    errorParams[1],
  );

  return value as TExpected;
}
