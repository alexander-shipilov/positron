import type { ErrorParams } from "../error/error-params";
import type { NonFalsy } from "../falsy/non-falsy";
import { isNonFalsy } from "../falsy/is-non-falsy";

import { assertType } from "./assert-type";

/**
 * The {@link ASSERT_NON_FALSY_MESSAGE} constant represents the default error
 * message thrown by the {@link assertNonFalsy} function.
 *
 * @public
 */
export const ASSERT_NON_FALSY_MESSAGE = "Non-falsy assertion failed";

/**
 * The {@link assertNonFalsy} function asserts whether the provided `value` is
 * {@link NonFalsy}. Returns the `value` if the assertion passes, or throws an
 * exception if it fails.
 *
 * @example
 * ```ts
 *  assertNonFalsy(1);
 *  assertNonFalsy("foo");
 *  // OK
 *
 *  assertNonFalsy(0);
 *  assertNonFalsy("");
 *  // throws
 * ```
 *
 * @param value - The value to assert for truthy.
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
export function assertNonFalsy<TValue>(
  value: TValue,
  ...errorParams: ErrorParams
): NonFalsy<TValue> {
  return assertType(
    value,
    isNonFalsy,
    errorParams[0] ?? ASSERT_NON_FALSY_MESSAGE,
    errorParams[1],
  );
}
