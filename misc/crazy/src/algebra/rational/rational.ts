import type { NumericLike } from "@positron/lang";

import type { IntegralAlgebra } from "../integral-algebra";
import { Fraction } from "../fraction";

/**
 * @param integral
 * @param value1
 * @param value2
 */
export const Rational = <TValue>(
  integral: IntegralAlgebra<TValue>,
  value1: NumericLike,
  value2: NumericLike = 1,
): Fraction<TValue> => {
  const [num, den] = Fraction((v) => integral.element(v), value1, value2);

  const sign = integral.mul(integral.sign(num), integral.sign(den));
  const gcd = integral.gcd(num, den);

  return [
    integral.mul(sign, integral.abs(integral.div(num, gcd))),
    integral.abs(integral.div(den, gcd)),
  ];
};
