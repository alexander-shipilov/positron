import type { NumberLike } from "@positron/core";

import type { IntegralMath } from "../integral";
import { Fraction } from "../types";

import type { FractionMathInterface } from "./FractionMath.interface";

export class FractionMath<TValue> implements FractionMathInterface<TValue> {
  readonly ONE: Fraction<TValue>;

  readonly ZERO: Fraction<TValue>;

  constructor(readonly Integer: IntegralMath<TValue>) {
    this.ZERO = [Integer.ZERO, Integer.ONE];
    this.ONE = [Integer.ONE, Integer.ONE];
  }

  abs(value: Fraction<TValue>): Fraction<TValue> {
    return [this.Integer.abs(value[0]), value[1]];
  }

  add(value1: Fraction<TValue>, value2: Fraction<TValue>): Fraction<TValue> {
    const { Integer } = this;
    const [num1, den1] = value1;
    const [num2, den2] = value2;

    const den = Integer.lcm(den1, den2);

    return this.reduce([
      Integer.add(
        Integer.mul(num1, Integer.div(den, den1)),
        Integer.mul(num2, Integer.div(den, den2)),
      ),
      den,
    ]);
  }

  compare(value1: Fraction<TValue>, value2: Fraction<TValue>): number {
    if (!this.equals(value1, value2)) {
      const { Integer } = this;
      const [num1, den1] = value1;
      const [num2, den2] = value2;

      const [div1, mod1] = Integer.divMod(num1, den1);
      const [div2, mod2] = Integer.divMod(num2, den2);

      return (
        Integer.compare(div1, div2) || -this.compare([den1, mod1], [den2, mod2])
      );
    }

    return 0;
  }

  div(value1: Fraction<TValue>, value2: Fraction<TValue>): Fraction<TValue> {
    return this.mul(value1, this.inv(value2));
  }

  equals(value1: Fraction<TValue>, value2: Fraction<TValue>): boolean {
    const { Integer } = this;

    return (
      Integer.equals(value1[0], value2[0]) &&
      Integer.equals(value1[1], value2[1])
    );
  }

  inv(value: Fraction<TValue>): Fraction<TValue> {
    const { Integer } = this;
    const [num, den] = value;

    return [Integer.mul(Integer.sign(num), den), Integer.abs(num)];
  }

  isInteger(value: Fraction<TValue>): boolean {
    const { Integer } = this;

    return Integer.equals(value[1], Integer.ONE);
  }

  mul(value1: Fraction<TValue>, value2: Fraction<TValue>): Fraction<TValue> {
    const { Integer } = this;
    const [num1, den1] = this.reduce([value1[0], value2[1]]);
    const [num2, den2] = this.reduce([value2[0], value1[1]]);

    return [Integer.mul(num1, num2), Integer.mul(den1, den2)];
  }

  neg(value: Fraction<TValue>): Fraction<TValue> {
    return [this.Integer.neg(value[0]), value[1]];
  }

  pow(value1: Fraction<TValue>, value2: Fraction<TValue>): Fraction<TValue> {
    const { Integer, ZERO } = this;

    if (!this.isInteger(value2)) {
      throw new TypeError("Ratio to the power of ratio is not supported");
    }

    const [num1, den1] =
      this.compare(value2, ZERO) < 0 ? this.inv(value1) : value1;
    const [num2] = value2;

    return [Integer.pow(num1, num2), Integer.pow(den1, num2)];
  }

  reduce(value: Fraction<TValue>): Fraction<TValue> {
    const { Integer } = this;
    const [num, den] = value;
    const gcd = Integer.gcd(num, den);

    return Integer.equals(gcd, Integer.ONE)
      ? value
      : [Integer.div(num, gcd), Integer.div(den, gcd)];
  }

  sign(value: Fraction<TValue>): Fraction<TValue> {
    return [this.Integer.sign(value[0]), this.Integer.ONE];
  }

  sub(value1: Fraction<TValue>, value2: Fraction<TValue>): Fraction<TValue> {
    return this.add(value1, this.neg(value2));
  }

  toValue(value: NumberLike): Fraction<TValue> {
    return Fraction((value: NumberLike) => this.Integer.toValue(value), value);
  }
}
