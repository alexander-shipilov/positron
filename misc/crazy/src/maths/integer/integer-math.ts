import type { NumberLike } from "@positron/core";
import { never } from "@positron/core";

import type { Vector2 } from "../../utils";
import type { IntegralMath } from "../integral";
import type { Order } from "../order";
import { Integer, isInteger } from "../../number";
import { MathException, MathExceptionName } from "../exception";

/**
 * Converts unsafe operation result to `smallint`
 * @param value - Unsafe operation result
 */
function result(value: number): Integer {
  if (isInteger(value)) {
    return value;
  }

  throw new MathException(MathExceptionName.OutOfRange);
}

export const IntegerMath: IntegralMath<Integer> = {
  abs(value: Integer): Integer {
    return Math.abs(value) as Integer;
  },

  add(value1: Integer, value2: Integer): Integer {
    return result(value1 + value2);
  },

  compare(value1: Integer, value2: Integer): Order {
    return value1 > value2 ? 1 : value1 < value2 ? -1 : 0;
  },

  div(value1: Integer, value2: Integer): Integer {
    const { ZERO } = this;

    if (value2 === ZERO) {
      throw new MathException(MathExceptionName.DivisionByZero);
    }

    if (value1 % value2 !== ZERO) {
      throw new MathException(MathExceptionName.NonIntegralDivision);
    }

    return (value1 / value2) as Integer;
  },

  divMod(value1: Integer, value2: Integer): Vector2<Integer> {
    const remainder = IntegerMath.mod(value1, value2);

    return [((value1 - remainder) / value2) as Integer, remainder];
  },

  equals(value1: Integer, value2: Integer): boolean {
    return value1 === value2;
  },

  gcd(value1: Integer, value2: Integer): Integer {
    const { ZERO } = this;

    if (value1 === ZERO && value2 === ZERO) {
      throw new MathException(MathExceptionName.DivisionByZero);
    }

    let divisor = IntegerMath.abs(value2);
    let remainder = IntegerMath.abs(value1);

    while (remainder !== ZERO) {
      [divisor, remainder] = [remainder, (divisor % remainder) as Integer];
    }

    return divisor;
  },

  inv(value: Integer): Integer {
    return IntegerMath.div(this.ONE, value);
  },

  lcm(value1: Integer, value2: Integer): Integer {
    const gcd = IntegerMath.gcd(value1, value2);

    return result(IntegerMath.abs((value1 * (value2 / gcd)) as Integer));
  },

  mod(value1: Integer, value2: Integer): Integer {
    if (value2 === this.ZERO) {
      throw new MathException(MathExceptionName.DivisionByZero);
    }

    return (((value1 % value2) + value2) % value2) as Integer;
  },

  mul(value1: Integer, value2: Integer): Integer {
    return result(value1 * value2);
  },

  neg(value: Integer): Integer {
    return -(value as number) as Integer;
  },

  ONE: 1 as Integer,

  operand(arg: NumberLike): Integer {
    return Integer(arg);
  },

  pow(value1: Integer, value2: Integer): Integer {
    const { ZERO } = this;

    if (value1 === ZERO && value2 === ZERO) {
      throw new MathException(MathExceptionName.ZeroPowerOfZero);
    }

    return result(
      value2 < ZERO
        ? IntegerMath.inv(value1) ** IntegerMath.neg(value2)
        : value1 ** value2,
    );
  },

  root(value1: Integer, value2: Integer): Integer {
    return never("Not implemented");
  },

  rootMod(value1: Integer, value2: Integer): Vector2<Integer> {
    return never("Not implemented");
  },

  sign(value: Integer): Integer {
    return Math.sign(value) as Integer;
  },

  sub(value1: Integer, value2: Integer): Integer {
    return result(value1 - value2);
  },

  ZERO: 0 as Integer,
};
