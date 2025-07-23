import type { ErrorLike } from "../error";
import type { TypeGuard } from "../type-guard";
import { error } from "../error";
import { never } from "../never";

import { AssertError } from "./assert-error";

/**
 * The {@link assertType} function tests if the passed {@link value} is match
 *   specified type.
 *
 * @example
 * ```ts
 *  const array = assertType(Array.isArray, maybeArray, 'Array expected')
 * ```
 *
 * @param isType - The type-guard function to test {@link value} type.
 * @param value - The value to check.
 * @param message - An {@link  ErrorLike} to get error if assertion is failed.
 *
 * @returns The passed value
 *
 * @throws {@link AssertError} if {@link message} is a string or omitted
 * @throws {@link message} otherwise
 *
 * @public
 */
export function assertType<TExpected, TValue = unknown>(
  isType: TypeGuard<TExpected, TValue>,
  value: TValue,
  message: ErrorLike = "Type assertion failed",
): TExpected {
  return isType(value) ? value : never(error(message, AssertError));
}
