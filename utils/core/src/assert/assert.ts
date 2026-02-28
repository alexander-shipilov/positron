import type { ErrorLike } from "../error";
import type { TypeGuard } from "../type-guard";
import { never } from "../never";

import { AssertException } from "./assert-exception";

/**
 * The {@link assert} function tests if the passed `value` is match
 *   to the specified type.
 *
 * @example
 * ```ts
 *  const array = assert(maybeArray, isArray, 'Array expected')
 *  // array is unknown[]
 * ```
 *
 * @param value - The value to check.
 * @param isType - The type-guard function to test `value` type.
 * @param message - An {@link  ErrorLike} to get error if assertion is failed.
 *
 * @returns The passed value
 *
 * @throws {@link AssertException} if `value` is a string or omitted
 * @throws `value` otherwise
 *
 * @public
 */
export function assert<TValue, TExpected extends TValue>(
  value: TValue,
  isType: TypeGuard<TValue, TExpected>,
  message: ErrorLike = "Assertion failed",
): TExpected {
  return isType(value) ? value : never(message, AssertException);
}
