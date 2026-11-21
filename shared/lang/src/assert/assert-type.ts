import type { ErrorParams } from "../error/error-params";
import type { TypeGuard } from "../type/type-guard";
import { never } from "../never/never";

import { AssertException } from "./assert-exception";

/**
 * The {@link ASSERT_TYPE_MESSAGE} constant represents the default error
 * message thrown by the {@link assertType} function.
 *
 * @public
 */
export const ASSERT_TYPE_MESSAGE = "Type assertion failed";

/**
 * The {@link assertType} function asserts whether the passed `value` matches
 * the specified type. Returns the `value` if the assertion passes, or throws
 * an exception if it fails.
 *
 * @example
 * ```ts
 * import { assertType, isArray } from "@positron/lang";
 *
 * assertType([], isArray);
 * // OK
 *
 * assertType(1, isArray);
 * // throws
 * ```
 *
 * @param value - The value to assert.
 *
 * @param isType - The type-guard function to test the given `value` type.
 *
 * @param errorParams - The parameters that will be passed to the {@link error}
 *   function to create an error if the assertion fails.
 *
 * @returns The passed `value`.
 *
 * @throws {@link AssertException} If `isType(value)` returns `false` and no
 *   custom error is specified.
 *
 * @public
 */
export function assertType<TValue, TExpected extends TValue>(
  value: TValue,
  isType: TypeGuard<TValue, TExpected>,
  ...errorParams: ErrorParams
): TExpected {
  return isType(value)
    ? value
    : never(
        errorParams[0] ?? ASSERT_TYPE_MESSAGE,
        errorParams[1] ?? AssertException,
      );
}
