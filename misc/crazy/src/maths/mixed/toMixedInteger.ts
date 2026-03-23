import type { NumberLike } from "@positron/core";

import type { MixedInteger } from "../types";
import { toBigInteger } from "../big-integer";
import { isSmallInteger, toSmallInteger } from "../small";

import { isMixedInteger } from "./isMixedInteger";

export function toMixedInteger(value: NumberLike): MixedInteger {
  return isMixedInteger(value)
    ? value
    : isSmallInteger(Number(value))
      ? toSmallInteger(value)
      : toBigInteger(value);
}
