import type { NumberLike, TypeGuard } from "@positron/core";
import { isNumber, never } from "@positron/core";

import type { IntegerNumber } from "../../number";
import type { Vector2 } from "../../utils";
import type { IntegralAlgebra } from "../integral-algebra";
import { Exception } from "../../exception";

/**
 * @public
 */
export class IntegerMath<
  TValue extends IntegerNumber,
> implements IntegralAlgebra<TValue> {
  /**
   *
   */
  readonly ONE: TValue;

  /**
   *
   */
  readonly ZERO: TValue;

  /**
   * @param element -
   * @param isValue -
   */
  constructor(
    readonly element: (arg: NumberLike) => TValue,
    protected readonly isValue: TypeGuard<number, TValue>,
  ) {
    this.ZERO = element(0);
    this.ONE = element(1);
  }

  /**
   * @param arg -
   */
  abs(arg: TValue): TValue {
    return this.result(Math.abs(arg));
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  add(arg1: TValue, arg2: TValue): TValue {
    return this.result(arg1 + arg2);
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  compare(arg1: TValue, arg2: TValue): number {
    return arg1 > arg2 ? 1 : arg1 < arg2 ? -1 : 0;
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  div(arg1: TValue, arg2: TValue): TValue {
    const { ZERO } = this;

    if (arg2 === ZERO) {
      throw new Exception(Exception.ZeroDivisor);
    } else if (arg1 % arg2 !== ZERO) {
      throw new Exception(Exception.NonIntegralDivision);
    } else {
      return this.result(arg1 / arg2);
    }
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  divRem(arg1: TValue, arg2: TValue): Vector2<TValue> {
    const mod = this.rem(arg1, arg2);

    return [this.result(this.sub(arg1, mod) / arg2), mod];
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  equals(arg1: TValue, arg2: TValue): boolean {
    return arg1 === arg2;
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  gcd(arg1: TValue, arg2: TValue): TValue {
    const { ZERO } = this;

    if (arg1 === ZERO && arg2 === ZERO) {
      throw new Exception(Exception.ZeroDivisor);
    } else {
      let divisor = this.abs(arg2);
      let remainder = this.abs(arg1);

      while (remainder !== ZERO) {
        [divisor, remainder] = [remainder, this.result(divisor % remainder)];
      }

      return divisor;
    }
  }

  /**
   * @param arg -
   */
  inv(arg: TValue): TValue {
    return this.div(this.ONE, arg);
  }

  /**
   * @param maybeElement -
   */
  public isElement(maybeElement: unknown): maybeElement is TValue {
    return isNumber(maybeElement) && this.isValue(maybeElement);
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  lcm(arg1: TValue, arg2: TValue): TValue {
    const gcd = this.gcd(arg1, arg2);

    return this.abs(this.mul(arg1, this.div(arg2, gcd)));
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  mul(arg1: TValue, arg2: TValue): TValue {
    return this.result(arg1 * arg2);
  }

  /**
   * @param arg -
   */
  neg(arg: TValue): TValue {
    return arg === this.ZERO ? arg : this.result(-(arg as number));
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  pow(arg1: TValue, arg2: TValue): TValue {
    const { ZERO } = this;

    if (arg1 === ZERO && arg2 === ZERO) {
      throw new Exception(Exception.ZeroPowerOfZero);
    } else {
      return this.result(
        arg2 < ZERO ? this.inv(arg1) ** this.neg(arg2) : arg1 ** arg2,
      );
    }
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  rem(arg1: TValue, arg2: TValue): TValue {
    const { ZERO } = this;

    if (arg2 === ZERO) {
      throw new Exception(Exception.ZeroDivisor);
    } else {
      const rem = this.result(arg1 % arg2);

      return rem < ZERO
        ? arg2 < ZERO
          ? this.sub(rem, arg2)
          : this.add(rem, arg2)
        : rem;
    }
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  root(arg1: TValue, arg2: TValue): TValue {
    const [root, mod] = this.rootRem(arg1, arg2);

    if (mod !== this.ZERO) {
      throw new Exception(Exception.NonIntegralRoot);
    } else {
      return root;
    }
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  rootRem(arg1: TValue, arg2: TValue): Vector2<TValue> {
    const { ZERO } = this;

    if (arg1 < ZERO) {
      throw new Exception(Exception.NegativeRadicand);
    } else if (arg2 <= ZERO) {
      throw new Exception(Exception.NonPositiveDegree);
    } else {
      const root = this.result(Math.trunc(arg1 ** (1 / arg2)));

      return [root, this.sub(arg1, this.pow(root, arg2))];
    }
  }

  /**
   * @param arg -
   */
  sign(arg: TValue): TValue {
    return this.result(Math.sign(arg));
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  sub(arg1: TValue, arg2: TValue): TValue {
    return this.result(arg1 - arg2);
  }

  /**
   * @param value -
   */
  protected result(value: number): TValue {
    return this.isValue(value)
      ? value
      : never(new Exception(Exception.OutOfRange));
  }
}
