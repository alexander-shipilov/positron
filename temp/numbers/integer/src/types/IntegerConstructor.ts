import type { IntegerLike } from "types/IntegerLike";

export interface IntegerConstructor<Value extends IntegerLike> {
  (value: IntegerLike): Value;

  readonly ZERO: Value;

  readonly ONE: Value;

  readonly TWO: Value;

  neg(value: IntegerLike): Value;

  add(value1: IntegerLike, value2: IntegerLike): Value;

  sub(value1: IntegerLike, value2: IntegerLike): Value;

  mul(value1: IntegerLike, value2: IntegerLike): Value;

  div(value1: IntegerLike, value2: IntegerLike): Value;

  rem(value1: IntegerLike, value2: IntegerLike): Value;

  pow(value1: IntegerLike, value2: IntegerLike): Value;

  isInteger(value: unknown): value is Value;
}
