import type { NumberLike } from "@positron/core";
import type { Nominal } from "@positron/nominal";

import type { Vector2 } from "../../utils";
import type { IntegralAlgebra } from "../integral-algebra";

import type { RationalType } from "./rational-type";

/**
 * @public
 */
export type Rational<TValue> = Nominal<Vector2<TValue>, RationalType>;

/**
 * @param integral
 * @param numValue
 * @param denValue
 *
 * @public
 */
export const Rational = <TValue>(
  integral: IntegralAlgebra<TValue>,
  numValue: NumberLike,
  denValue: NumberLike = 1,
): Rational<TValue> => {
  const num = integral.element(numValue);
  const den = integral.element(denValue);

  if (integral.equals(den, integral.ZERO)) {
    throw new TypeError("Zero denominator");
  } else {
    const sign = integral.mul(integral.sign(num), integral.sign(den));
    const gcd = integral.gcd(num, den);

    return [
      integral.mul(sign, integral.abs(integral.div(num, gcd))),
      integral.abs(integral.div(den, gcd)),
    ] as unknown as Rational<TValue>;
  }
};
