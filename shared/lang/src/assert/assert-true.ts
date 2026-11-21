import type { ErrorParams } from "../error/error-params";

import { assertType } from "./assert-type";

/**
 * The {@link ASSERT_TRUE_MESSAGE} constant represents the default error
 * message thrown by the {@link assertTrue} function.
 *
 * @public
 */
export const ASSERT_TRUE_MESSAGE = "True assertion failed";

/**
 * The {@link assertTrue} function asserts whether the provided `value` is
 * strictly equal to `true`. Returns the `value` if the assertion passes, or
 * throws an exception if it fails.
 *
 * @example
 * ```ts
 * import { assertTrue } from "@positron/lang";
 *
 * assertTrue(true);
 * // OK
 *
 * assertTrue(1);
 * assertTrue(false);
 * assertTrue(undefined);
 * // throws
 * ```
 *
 * @param value - The value to assert for equality to `true`.
 *
 * @param errorParams - The parameters that will be passed to the {@link error}
 *   function to create an error if the assertion fails.
 *
 * @returns The passed `value`.
 *
 * @throws {@link AssertException} If `value` is not strictly equal to `true`
 *   and no custom error is specified.
 *
 * @public
 */
export function assertTrue(value: unknown, ...errorParams: ErrorParams): true {
  return assertType(
    value,
    (value) => value === true,
    errorParams[0] ?? ASSERT_TRUE_MESSAGE,
    errorParams[1],
  );
}
