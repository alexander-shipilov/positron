import { toFiniteNumber } from "@positron/lang";

import type { Double } from "./double";

/**
 * @public
 */
export function toDouble(value: number): Double {
  return toFiniteNumber(value) as Double;
}
