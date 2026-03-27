import type { NumberLike } from "@positron/core";

import { Fraction } from "../fraction";

import type { IntegralMath } from "./integral-math";

export const IntegralFraction = <TValue>(
  Integral: IntegralMath<TValue>,
  value1: NumberLike,
  value2: NumberLike = 1,
): Fraction<TValue> => {
  const [num, den] = Fraction((v) => Integral.operand(v), value1, value2);

  const sign = Integral.mul(Integral.sign(num), Integral.sign(den));
  const gcd = Integral.gcd(num, den);

  return [
    Integral.mul(sign, Integral.abs(Integral.div(num, gcd))),
    Integral.abs(Integral.div(den, gcd)),
  ];
};
