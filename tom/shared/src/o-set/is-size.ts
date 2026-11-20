import { isSafeIntegerNumber } from "@positron/lang";

/**
 *
 */
export function isSize(maybeSize: number): maybeSize is number {
  return isSafeIntegerNumber(maybeSize) && maybeSize >= 0;
}
