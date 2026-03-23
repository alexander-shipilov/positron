import type { NumberLike } from "@positron/core";

import type { BigInteger } from "./BigInteger";
import { isBigInteger } from "./isBigInteger";

export function toBigInteger(value: NumberLike): BigInteger {
  return isBigInteger(value) ? value : BigInt(value);
}
