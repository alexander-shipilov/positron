import type { BigRational } from "../types";
import { isBigInteger } from "../big-integer";
import { isFraction } from "../fraction";

export function isBigRational(value: unknown): value is BigRational {
  return isFraction(isBigInteger, value);
}
