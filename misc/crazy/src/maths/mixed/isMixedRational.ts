import type { MixedRational } from "../types";
import { isFraction } from "../fraction";

import { isMixedInteger } from "./isMixedInteger";

export function isMixedRational(value: unknown): value is MixedRational {
  return isFraction(isMixedInteger, value);
}
