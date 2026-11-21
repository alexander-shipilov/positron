import type { ErrorParams } from "../error/error-params";

import { assertType } from "./assert-type";

/**
 * The {@link ASSERT_FALSE_MESSAGE} constant represents the default error
 * message thrown by the {@link assertFalse} function.
 *
 * @public
 */
export const ASSERT_FALSE_MESSAGE = "False assertion failed";

/**
 * The {@link assertFalse} function asserts whether the provided `value` is
 * strictly equal to `false`. Returns the `value` if the assertion passes, or
 * throws an exception if it fails.
 *
 * @example
 * ```ts
 * import { assertFalse } from "@positron/lang";
 *
 * assertFalse(false);
 * // OK
 *
 * assertFalse(1);
 * assertFalse(true);
 * assertFalse(undefined);
 * // throws
 * ```
 *
 * @param value - The value to assert for equality to `false`.
 *
 * @param errorParams - The parameters that will be passed to the {@link error}
 *   function to create an error if the assertion fails.
 *
 * @returns The passed `value`.
 *
 * @throws {@link AssertException} If `value` is not strictly equal to `false`
 *   and no custom error is specified.
 *
 * @public
 */
export function assertFalse(
  value: unknown,
  ...errorParams: ErrorParams
): false {
  return assertType(
    value,
    (value) => value === false,
    errorParams[0] ?? ASSERT_FALSE_MESSAGE,
    errorParams[1],
  );
}
