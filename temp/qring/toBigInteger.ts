import { BigInteger } from "./BigInteger";
import { IntegerLike } from "./IntegerLike";

export function toBigInteger(value: IntegerLike): BigInteger {
  return BigInt(value);
}
