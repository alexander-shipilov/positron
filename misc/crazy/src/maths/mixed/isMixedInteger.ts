import type { MixedInteger } from "../types";
import { isBigInteger } from "../big-integer";
import { isSmallInteger } from "../small";

export function isMixedInteger(value: unknown): value is MixedInteger {
  return isBigInteger(value) || isSmallInteger(value);
}
