import type { ErrorParams } from "../error/error-params";
import type { NullLike } from "../null/null-like";
import { isNullLike } from "../null/is-null-like";

import { assertType } from "./assert-type";

/**
 * The {@link ASSERT_NULL_LIKE_MESSAGE} constant represents the default error
 * message thrown by the {@link assertNullLike} function.
 *
 * @public
 */
export const ASSERT_NULL_LIKE_MESSAGE = "Null-like assertion failed";

/**
 * The {@link assertNullLike} function asserts whether the provided `value` is
 * a {@link NullLike} value. Returns the `value` if the assertion passes, or
 * throws an exception if it fails.
 *
 * @example
 * ```ts
 * import { assertNullLike } from "@positron/lang";
 *
 * assertNullLike(null);
 * assertNullLike(undefined);
 * // OK
 *
 * assertNullLike(1);
 * // throws
 * ```
 *
 * @param value - The value to assert.
 *
 * @param errorParams - The parameters that will be passed to the {@link error}
 *   function to create an error if the assertion fails.
 *
 * @returns The passed `value`.
 *
 * @throws {@link AssertException} If `value` is neither `null` nor `undefined`
 *   and no custom error is specified.
 *
 * @public
 */
export function assertNullLike(
  value: unknown,
  ...errorParams: ErrorParams
): NullLike {
  return assertType(
    value,
    isNullLike,
    errorParams[0] ?? ASSERT_NULL_LIKE_MESSAGE,
    errorParams[1],
  );
}
