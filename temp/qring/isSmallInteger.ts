import { SmallInteger } from "./SmallInteger";

export function isSmallInteger(value: unknown): value is SmallInteger {
  return Number.isSafeInteger(value);
}
