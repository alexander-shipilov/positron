import type { ErrorParams } from "../error/error-params";
import type { NonNullish } from "../null/non-nullish";
import { isNonNullish } from "../null/is-non-nullish";

import { assertType } from "./assert-type";

/**
 * The {@link ASSERT_NON_NULLISH_MESSAGE} constant represents the default error
 * message thrown by the {@link assertNonNullish} function.
 *
 * @public
 */
export const ASSERT_NON_NULLISH_MESSAGE = "Non-nullish assertion failed";

/**
 * The {@link assertNonNullish} function asserts whether the provided `value`
 * is {@link NonNullish} value - it is strictly not equal to `null`. Returns the
 * `value` if the assertion passes, or throws an exception if it fails.
 *
 * @example
 * ```ts
 *  asserNotNull(1);
 *  asserNotNull(undefined);
 *  // OK
 *
 *  asserNotNull(null);
 *  // throws
 * ```
 *
 * @param value - The value to assert for equality to `null`.
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
export function assertNonNullish<TValue>(
  value: TValue,
  ...errorParams: ErrorParams
): NonNullish<TValue> {
  return assertType(
    value,
    isNonNullish,
    errorParams[0] ?? ASSERT_NON_NULLISH_MESSAGE,
    errorParams[1],
  );
}
