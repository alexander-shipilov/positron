import type { NumberLike, TypeGuard } from "@positron/core";
import { isBigint } from "@positron/core";

import type { Vector2 } from "../../utils";
import type { IntegralAlgebra } from "../integral-algebra";
import { Exception } from "../../exception";

/**
 * @param arg1 -
 * @param arg2 -
 */
function add(arg1: bigint, arg2: bigint): bigint {
  try {
    return arg1 + arg2;
  } catch {
    throw new Exception(Exception.OutOfRange);
  }
}

/**
 * @param arg1 -
 * @param arg2 -
 */
function and(arg1: bigint, arg2: bigint): bigint {
  return arg1 & arg2;
}

/**
 * @param arg1 -
 * @param arg2 -
 */
function mod(arg1: bigint, arg2: bigint): bigint {
  return arg1 % arg2;
}

/**
 * @param arg1 -
 * @param arg2 -
 */
function mul(arg1: bigint, arg2: bigint): bigint {
  try {
    return arg1 * arg2;
  } catch {
    throw new Exception(Exception.OutOfRange);
  }
}

/**
 * @param arg1 -
 * @param arg2 -
 */
function quot(arg1: bigint, arg2: bigint): bigint {
  return arg1 / arg2;
}

/**
 * @param arg1 -
 * @param arg2 -
 */
function shl(arg1: bigint, arg2: bigint): bigint {
  try {
    return arg1 << arg2;
  } catch {
    throw new Exception(Exception.OutOfRange);
  }
}

/**
 * @param arg1 -
 * @param arg2 -
 */
function shr(arg1: bigint, arg2: bigint): bigint {
  try {
    return arg1 >> arg2;
  } catch {
    throw new Exception(Exception.OutOfRange);
  }
}

/**
 * @param arg1 -
 * @param arg2 -
 */
function sub(arg1: bigint, arg2: bigint): bigint {
  try {
    return arg1 - arg2;
  } catch {
    throw new Exception(Exception.OutOfRange);
  }
}

/**
 * @public
 */
export class BigintMath<
  TValue extends bigint,
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
    readonly element: (value: NumberLike) => TValue,
    protected readonly isValue: TypeGuard<bigint, TValue>,
  ) {
    this.ZERO = element(0);
    this.ONE = element(1);
  }

  /**
   * @param arg -
   */
  abs(arg: TValue): TValue {
    return arg < this.ZERO ? this.neg(arg) : arg;
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  add(arg1: TValue, arg2: TValue): TValue {
    return this.result(add(arg1, arg2));
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
    } else if (this.rem(arg1, arg2) !== ZERO) {
      throw new Exception(Exception.NonIntegralDivision);
    } else {
      return this.quot(arg1, arg2);
    }
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  divRem(arg1: TValue, arg2: TValue): Vector2<TValue> {
    const mod = this.rem(arg1, arg2);

    return [this.quot(this.sub(arg1, mod), arg2), mod];
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
        [divisor, remainder] = [remainder, this.rem(divisor, remainder)];
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

  isElement(maybeElement: unknown): maybeElement is TValue {
    return isBigint(maybeElement) && this.isValue(maybeElement);
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
  mod(arg1: TValue, arg2: TValue): TValue {
    return this.result(mod(arg1, arg2));
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  mul(arg1: TValue, arg2: TValue): TValue {
    return this.result(mul(arg1, arg2));
  }

  /**
   * @param arg -
   */
  neg(arg: TValue): TValue {
    return this.result(-(arg as bigint));
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  pow(arg1: TValue, arg2: TValue): TValue {
    const { ONE, ZERO } = this;

    if (arg1 === ZERO && arg2 === ZERO) {
      throw new Exception(Exception.ZeroPowerOfZero);
    } else {
      let base = arg2 < ZERO ? this.inv(arg1) : arg1;
      let power = this.abs(arg2);
      let result = ONE;

      while (power > ZERO) {
        if (and(power, ONE) === ONE) {
          result = this.mul(result, base);
        }

        base = this.mul(base, base);
        power = this.shr(power, ONE);
      }

      return result;
    }
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  quot(arg1: TValue, arg2: TValue): TValue {
    return this.result(quot(arg1, arg2));
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
      const remainder = this.rem(arg1, arg2);

      return remainder < ZERO
        ? arg2 < ZERO
          ? this.sub(remainder, arg2)
          : this.add(remainder, arg2)
        : remainder;
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
    const { ONE, ZERO } = this;

    if (arg1 < ZERO) {
      throw new Exception(Exception.NegativeRadicand);
    } else if (arg2 <= ZERO) {
      throw new Exception(Exception.NonPositiveDegree);
    } else {
      let x = ONE;
      let b = arg1;

      while (b > ZERO) {
        b = this.shr(b, arg2);
        x = this.shl(x, ONE);
      }

      const n1 = this.sub(arg2, ONE);
      let xn1 = this.pow(x, n1);

      while (
        arg1 < this.mul(xn1, x) ||
        arg1 >= this.pow(this.add(x, ONE), arg2)
      ) {
        x = this.quot(this.add(this.mul(n1, x), this.quot(arg1, xn1)), arg2);
        xn1 = this.pow(x, n1);
      }

      return [x, this.sub(arg1, this.pow(x, arg2))];
    }
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  shl(arg1: TValue, arg2: TValue): TValue {
    return this.result(shl(arg1, arg2));
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  shr(arg1: TValue, arg2: TValue): TValue {
    return this.result(shr(arg1, arg2));
  }

  /**
   * @param arg -
   */
  sign(arg: TValue): TValue {
    const { ONE, ZERO } = this;

    return arg < ZERO ? this.result(-(ONE as bigint)) : arg > ZERO ? ONE : ZERO;
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  sub(arg1: TValue, arg2: TValue): TValue {
    return this.result(sub(arg1, arg2));
  }

  /**
   * @param value -
   */
  protected result(value: bigint): TValue {
    if (this.isElement(value)) {
      return value;
    }

    throw new Exception(Exception.OutOfRange);
  }
}
