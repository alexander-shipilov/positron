import type { ErrorParams } from "../error/error-params";
import type { NonOptional } from "../utility/non-optional";
import { isNonOptional } from "../utility/is-non-optional";

import { assertType } from "./assert-type";

/**
 * The {@link ASSERT_NON_OPTIONAL_MESSAGE} constant represents the default error
 * message thrown by the {@link assertNonOptional} function.
 *
 * @public
 */
export const ASSERT_NON_OPTIONAL_MESSAGE = "Non-optional assertion failed";

/**
 * The {@link assertNonOptional} function asserts whether the provided `value`
 * is {@link NonOptional} (strictly not equal to `undefined`). Returns the
 * `value` if the assertion passes, or throws an exception if it fails.
 *
 * @example
 * ```ts
 * import { assertNonOptional } from "@positron/lang";
 *
 * assertNonOptional(1);
 * assertNonOptional(null);
 * // OK
 *
 * assertNonOptional(undefined);
 * // throws
 * ```
 *
 * @param value - The value to assert for non-optionality.
 *
 * @param errorParams - The parameters that will be passed to the {@link error}
 *   function to create an error if the assertion fails.
 *
 * @returns The passed `value`.
 *
 * @throws {@link AssertException} If `value` is `undefined` and no custom error
 *   is specified.
 *
 * @public
 */
export function assertNonOptional<TValue>(
  value: TValue,
  ...errorParams: ErrorParams
): NonOptional<TValue> {
  return assertType(
    value,
    isNonOptional,
    errorParams[0] ?? ASSERT_NON_OPTIONAL_MESSAGE,
    errorParams[1],
  );
}
