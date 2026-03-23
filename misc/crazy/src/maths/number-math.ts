import type { NumberLike } from "@positron/core";

export interface NumberMath<TValue> {
  ZERO: TValue;

  ONE: TValue;

  abs(value: TValue): TValue;

  add(value1: TValue, value2: TValue): TValue;

  compare(value1: TValue, value2: TValue): number;

  equals(value1: TValue, value2: TValue): boolean;

  div(value1: TValue, value2: TValue): TValue;

  inv(value: TValue): TValue;

  mul(value1: TValue, value2: TValue): TValue;

  neg(value: TValue): TValue;

  pow(value1: TValue, value2: TValue): TValue;

  sign(value: TValue): TValue;

  sub(value1: TValue, value2: TValue): TValue;

  toValue(value: NumberLike): TValue;
}
