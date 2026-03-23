import type { Integer } from "../../number";
import { isInteger } from "../../number";

/**
 * Converts unsafe operation result to {@link Integer}
 *
 * @param value - Unsafe operation result
 *
 * @internal
 */
export function _result(value: number): Integer {
  if (isInteger(value)) {
    return value;
  }

  throw new RangeError("Result is out of range");
}
