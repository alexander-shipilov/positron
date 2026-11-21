import { toFiniteNumber } from "@positron/lang";

/**
 *
 */
export function toDouble(value: number): number {
  return toFiniteNumber(value);
}
