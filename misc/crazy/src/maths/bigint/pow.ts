import { div } from "./div";

export function pow(value1: bigint, value2: bigint): bigint {
  if (value1 === 0n && value2 === 0n) {
    throw new RangeError("Zero to the power of zero");
  }

  return value2 < 0n ? div(1n, value1) ** -value2 : value1 ** value2;
}
