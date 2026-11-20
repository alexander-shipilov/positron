import { toSafeIntegerNumber } from "@positron/lang";

/**
 *
 */
export function toPower(maybePower: number): number {
  return toSafeIntegerNumber(maybePower);
}
