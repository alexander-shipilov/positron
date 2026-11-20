import type { ErrorParams } from "../error/error-params";
import { isFiniteNumber } from "../number/is-finite-number";

import { assertType } from "./assert-type";

/**
 * The {@link ASSERT_FINITE_MESSAGE} constant represents the default error
 * message thrown by the {@link assertFinite} function.
 *
 * @public
 */
export const ASSERT_FINITE_MESSAGE = "Finite number assertion failed";

/**
 * The {@link assertFinite} function asserts whether the provided `value`
 * is a finite number. Returns the `value` if the assertion passes, or throws
 * an exception if it fails.
 *
 * @example
 * ```ts
 *  assertFinite(0);
 *  // OK
 *
 *  assertFinite(Infinity);
 *  assertFinite(NaN);
 *  // throws
 * ```
 *
 * @param value - The value to assert for being finite number.
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
export function assertFinite(
  value: number,
  ...errorParams: ErrorParams
): number {
  return assertType(
    value,
    isFiniteNumber,
    errorParams[0] ?? ASSERT_FINITE_MESSAGE,
    errorParams[1],
  );
}
