import type { Nominal, NumericLike } from "@positron/lang";

import type { Vector2 } from "../../utils";
import type { IntegralAlgebra } from "../integral-algebra";

/**
 * @public
 */
export type Rational<TValue> = Nominal<Vector2<TValue>, "Rational">;

/**
 * @param integral
 *
 * @param numValue
 *
 * @param denValue
 *
 * @public
 */
export const Rational = <TValue>(
  integral: IntegralAlgebra<TValue>,
  numValue: NumericLike,
  denValue: NumericLike = 1,
): Rational<TValue> => {
  const num = integral.element(numValue);
  const den = integral.element(denValue);

  if (integral.equals(den, integral.ZERO)) {
    throw new TypeError("Zero denominator");
  } else {
    const sign = integral.mul(integral.sign(num), integral.sign(den));
    const gcd = integral.gcd(num, den);

    // @ts-expect-error TS2322: Type [TValue, TValue] is not assignable to type
    // Nominal<Vector2<TValue>, ["Rational"]>
    return [
      integral.mul(sign, integral.abs(integral.div(num, gcd))),
      integral.abs(integral.div(den, gcd)),
    ];
  }
};
