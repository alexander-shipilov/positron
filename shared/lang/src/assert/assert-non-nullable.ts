import type { ErrorParams } from "../error/error-params";
import { isNonNullable } from "../null/is-non-nullable";

import { assertType } from "./assert-type";

/**
 * The {@link ASSERT_NON_NULLABLE_MESSAGE} constant represents the default error
 * message thrown by the {@link assertNonNullable} function.
 *
 * @public
 */
export const ASSERT_NON_NULLABLE_MESSAGE = "Non-nullable assertion failed";

/**
 * The {@link assertNonNullable} function asserts whether the provided `value`
 * is `NonNullable` - it is strictly not equal to either `null` or `undefined`.
 * Returns the `value` if the assertion passes, or throws an exception if it
 * fails.
 *
 * @example
 * ```ts
 *  asserNotNullable(1);
 *  // OK
 *
 *  asserNotNullable(null);
 *  asserNotNullable(undefined);
 *  // throws
 * ```
 *
 * @param value - The value to assert for non-nullability.
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
export function assertNonNullable<TValue>(
  value: TValue,
  ...errorParams: ErrorParams
): NonNullable<TValue> {
  return assertType(
    value,
    isNonNullable,
    errorParams[0] ?? ASSERT_NON_NULLABLE_MESSAGE,
    errorParams[1],
  );
}
