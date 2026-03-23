import type { SmallInteger } from "../types";

export function isSmallInteger(value: unknown): value is SmallInteger {
  return Number.isSafeInteger(value);
}
