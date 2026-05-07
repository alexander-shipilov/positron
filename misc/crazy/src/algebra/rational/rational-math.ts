import type { NumberLike } from "@positron/core";

import type { Vector2 } from "../../utils";
import type { Fraction, FractionMath } from "../fraction";
import type { IntegralAlgebra } from "../integral-algebra";
import { isVector2 } from "../../utils";
import { isVector2Of } from "../../utils/vector2/is-vector2-of";

import { Rational } from "./rational";

export class RationalMath<TValue> implements FractionMath<TValue> {
  /**
   *
   */
  readonly ONE: Fraction<TValue>;

  /**
   *
   */
  readonly ZERO: Fraction<TValue>;

  /**
   *
   */
  protected readonly integral: IntegralAlgebra<TValue>;

  /**
   * @param integral
   */
  constructor(integral: IntegralAlgebra<TValue>) {
    this.integral = integral;
    this.ZERO = [integral.ZERO, integral.ONE];
    this.ONE = [integral.ONE, integral.ONE];
  }

  /**
   * @param arg
   */
  abs(arg: Fraction<TValue>): Fraction<TValue> {
    return [this.integral.abs(arg[0]), arg[1]];
  }

  /**
   * @param arg1
   * @param arg2
   */
  add(arg1: Fraction<TValue>, arg2: Fraction<TValue>): Fraction<TValue> {
    const { integral } = this;
    const [num1, den1] = arg1;
    const [num2, den2] = arg2;

    const den = integral.lcm(den1, den2);

    return this.reduce([
      integral.add(
        integral.mul(num1, integral.div(den, den1)),
        integral.mul(num2, integral.div(den, den2)),
      ),
      den,
    ]);
  }

  /**
   * @param arg1
   * @param arg2
   */
  compare(arg1: Fraction<TValue>, arg2: Fraction<TValue>): number {
    if (this.equals(arg1, arg2)) {
      return 0;
    } else {
      const { integral } = this;
      const [num1, den1] = arg1;
      const [num2, den2] = arg2;

      const [div1, mod1] = integral.divRem(num1, den1);
      const [div2, mod2] = integral.divRem(num2, den2);

      return (
        integral.compare(div1, div2) ||
        -this.compare([den1, mod1], [den2, mod2])
      );
    }
  }

  /**
   * @param arg1
   * @param arg2
   */
  div(arg1: Fraction<TValue>, arg2: Fraction<TValue>): Fraction<TValue> {
    return this.mul(arg1, this.inv(arg2));
  }

  /**
   * @param value
   */
  element(value: NumberLike): Fraction<TValue> {
    return Rational(this.integral, value);
  }

  /**
   * @param arg1
   * @param arg2
   */
  equals(arg1: Fraction<TValue>, arg2: Fraction<TValue>): boolean {
    return (
      this.integral.equals(arg1[0], arg2[0]) &&
      this.integral.equals(arg1[1], arg2[1])
    );
  }

  /**
   * @param arg
   */
  inv(arg: Fraction<TValue>): Fraction<TValue> {
    const { integral } = this;
    const [num, den] = arg;

    return [integral.mul(integral.sign(num), den), integral.abs(num)];
  }

  /**
   * @param maybeElement
   */
  isElement(maybeElement: unknown): maybeElement is Vector2<TValue> {
    return (
      isVector2(maybeElement) &&
      isVector2Of(maybeElement, (value) => this.integral.isElement(value))
    );
  }

  /**
   * @param value
   */
  isInteger(value: Fraction<TValue>): boolean {
    const { integral } = this;

    return integral.equals(value[1], integral.ONE);
  }

  /**
   * @param arg1
   * @param arg2
   */
  mul(arg1: Fraction<TValue>, arg2: Fraction<TValue>): Fraction<TValue> {
    const { integral } = this;
    const [num1, den1] = this.reduce([arg1[0], arg2[1]]);
    const [num2, den2] = this.reduce([arg2[0], arg1[1]]);

    return [integral.mul(num1, num2), integral.mul(den1, den2)];
  }

  /**
   * @param arg
   */
  neg(arg: Fraction<TValue>): Fraction<TValue> {
    return [this.integral.neg(arg[0]), arg[1]];
  }

  /**
   * @param arg1
   * @param arg2
   */
  pow(arg1: Fraction<TValue>, arg2: Fraction<TValue>): Fraction<TValue> {
    const { integral, ZERO } = this;

    if (!this.isInteger(arg2)) {
      throw new TypeError("Ratio to the power of ratio is not supported");
    }

    const [num1, den1] = this.compare(arg2, ZERO) < 0 ? this.inv(arg1) : arg1;
    const [num2] = arg2;

    return [integral.pow(num1, num2), integral.pow(den1, num2)];
  }

  /**
   * @param value
   */
  reduce(value: Fraction<TValue>): Fraction<TValue> {
    const { integral } = this;
    const [num, den] = value;
    const gcd = integral.gcd(num, den);

    return integral.equals(gcd, integral.ONE)
      ? value
      : [integral.div(num, gcd), integral.div(den, gcd)];
  }

  /**
   * @param arg
   */
  sign(arg: Fraction<TValue>): Fraction<TValue> {
    return [this.integral.sign(arg[0]), this.integral.ONE];
  }

  /**
   * @param arg1
   * @param arg2
   */
  sub(arg1: Fraction<TValue>, arg2: Fraction<TValue>): Fraction<TValue> {
    return this.add(arg1, this.neg(arg2));
  }
}
