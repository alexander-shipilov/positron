import type { ErrorParams } from "../error/error-params";
import { isNull } from "../null/is-null";

import { assertType } from "./assert-type";

/**
 * The {@link ASSERT_NULL_MESSAGE} constant represents the default error
 * message thrown by the {@link assertNull} function.
 *
 * @public
 */
export const ASSERT_NULL_MESSAGE = "Null assertion failed";

/**
 * The {@link assertNull} function asserts whether the provided `value` is
 * strictly equal to `null`. Returns the `value` if the assertion passes, or
 * throws an exception if it fails.
 *
 * @example
 * ```ts
 * import { assertNull } from "@positron/lang";
 *
 * assertNull(null);
 * // OK
 *
 * assertNull(1);
 * assertNull(undefined);
 * // throws
 * ```
 *
 * @param value - The value to assert for equality to `null`.
 *
 * @param errorParams - The parameters that will be passed to the {@link error}
 *   function to create an error if the assertion fails.
 *
 * @returns The passed `value`.
 *
 * @throws {@link AssertException} If `value` is not strictly equal to `null`
 *   and no custom error is specified.
 *
 * @public
 */
export function assertNull(value: unknown, ...errorParams: ErrorParams): null {
  return assertType(
    value,
    isNull,
    errorParams[0] ?? ASSERT_NULL_MESSAGE,
    errorParams[1],
  );
}
