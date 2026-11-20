import { isIntegerNumber, MAX_LENGTH } from "@positron/lang";

import type { IndexNumber } from "./index-number";

/**
 *
 * @param value - The value to check.
 *
 * @public
 */
export function isIndexNumber(value: number): value is IndexNumber {
  return isIntegerNumber(value) && value >= 0 && value < MAX_LENGTH;
}
