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
 * is a {@link NonNullish} value (strictly not equal to `null`). Returns the
 * `value` if the assertion passes, or throws an exception if it fails.
 *
 * @example
 * ```ts
 * import { assertNonNullish } from "@positron/lang";
 *
 * assertNonNullish(1);
 * assertNonNullish(undefined);
 * // OK
 *
 * assertNonNullish(null);
 * // throws
 * ```
 *
 * @param value - The value to assert for non-nullishness.
 *
 * @param errorParams - The parameters that will be passed to the {@link error}
 *   function to create an error if the assertion fails.
 *
 * @returns The passed `value`.
 *
 * @throws {@link AssertException} If `value` is `null` and no custom error is
 *   specified.
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
