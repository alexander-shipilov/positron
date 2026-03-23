import type { SmallRational } from "../types";
import { isFraction } from "../fraction";

import { isSmallInteger } from "./isSmallInteger";

export function isSmallRational(value: unknown): value is SmallRational {
  return isFraction(isSmallInteger, value);
}
