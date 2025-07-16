import { BigInteger } from "./BigInteger";

export function isBigInteger(value: unknown): value is BigInteger {
  return typeof value === "bigint";
}
