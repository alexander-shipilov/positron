import { isBigInt } from "@positron/lang";
import type { IntegerImpl } from "types/IntegerImpl";

const ZERO = 0n;

const ONE = 1n;

const TWO = 2n;

function exception(error: Error): never {
  throw error;
}

export const BigIntegerImpl: IntegerImpl<bigint> = {
  ZERO,
  ONE,
  TWO,

  neg: (value: bigint): bigint => (value === ZERO ? value : -value),

  eq: (value1: bigint, value2: bigint) => value1 === value2,

  gt: (value1: bigint, value2: bigint) => value1 > value2,

  gte: (value1: bigint, value2: bigint) => value1 >= value2,

  lt: (value1: bigint, value2: bigint) => value1 < value2,

  lte: (value1: bigint, value2: bigint) => value1 <= value2,

  add: (value1: bigint, value2: bigint) => value1 + value2,

  sub: (value1: bigint, value2: bigint) => value1 - value2,

  mul: (value1: bigint, value2: bigint) => value1 * value2,

  div: (value1: bigint, value2: bigint) =>
    value1 % value2 === ZERO
      ? value1 / value2
      : exception(new RangeError("Result of division is not a bigint")),

  pow: (value1: bigint, value2: bigint) =>
    value2 < ZERO
      ? BigIntegerImpl.div(ONE, value1) ** -value2
      : value1 ** value2,

  rem: (value1: bigint, value2: bigint) => value1 % value2,

  isInteger: isBigInt,

  toInteger: BigInt,
};
