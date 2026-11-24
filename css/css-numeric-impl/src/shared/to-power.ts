import { toSafeIntegerNumber } from "@positron/lang";

import type { Power } from "./power";

/**
 * The {@link toPower} function validates that `maybePower` is a safe integer
 * and brands it as {@link Power}.
 *
 * @param maybePower - The numeric exponent to validate.
 *
 * @returns The safe integer branded as {@link Power}.
 *
 * @throws `RangeError` If `maybePower` is not a safe integer.
 *
 * @public
 */
export function toPower(maybePower: number): Power {
  return toSafeIntegerNumber(maybePower) as Power;
}
