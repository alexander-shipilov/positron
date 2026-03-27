import type { MixedInteger } from "../types";
import { isBigInteger } from "../big-integer";
import { isSmallInteger } from "../integer";

export function isMixedInteger(value: unknown): value is MixedInteger {
  return isBigInteger(value) || isSmallInteger(value);
}
