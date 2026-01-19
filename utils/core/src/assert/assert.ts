import type { ErrorLike } from "../error";
import type { TypeGuard } from "../type-guard";
import { never } from "../never";

import { AssertException } from "./assert-exception";

/**
 * The {@link assert} function tests if the passed {@link value} is match
 *   to the specified type.
 *
 * @example
 * ```ts
 *  const array = assert(isArray, maybeArray, 'Array expected')
 *  // array is unknown[]
 * ```
 *
 * @param isType - The type-guard function to test {@link value} type.
 * @param value - The value to check.
 * @param message - An {@link  ErrorLike} to get error if assertion is failed.
 *
 * @returns The passed value
 *
 * @throws {@link AssertException} if {@link message} is a string or omitted
 * @throws {@link message} otherwise
 *
 * @public
 */
export function assert<TExpected, TValue = unknown>(
  isType: TypeGuard<TExpected, NoInfer<TValue>>,
  value: TValue,
  message: ErrorLike = "Assertion failed",
): TExpected {
  return isType(value) ? value : never(message, AssertException);
}
