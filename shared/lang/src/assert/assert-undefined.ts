import type { ErrorParams } from "../error/error-params";

import { assertEqual } from "./assert-equal";

/**
 * The {@link ASSERT_UNDEFINED_MESSAGE} constant represents the default error
 * message thrown by the {@link assertUndefined} function.
 *
 * @public
 */
export const ASSERT_UNDEFINED_MESSAGE = "Undefined assertion failed";

/**
 * The {@link assertUndefined} function asserts whether the provided `value` is
 * strictly equal to `undefined`. Returns the `value` if the assertion passes,
 * or throws an exception if it fails.
 *
 * @example
 * ```ts
 *  assertUndefined(undefined);
 *  // OK
 *
 *  assertUndefined(1);
 *  assertUndefined(false);
 *  assertUndefined(null);
 *  // throws
 * ```
 *
 * @param value - The value to assert.
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
export function assertUndefined(
  value: unknown,
  ...errorParams: ErrorParams
): undefined {
  // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
  return assertEqual(
    value,
    undefined,
    errorParams[0] ?? ASSERT_UNDEFINED_MESSAGE,
    errorParams[1],
  );
}
