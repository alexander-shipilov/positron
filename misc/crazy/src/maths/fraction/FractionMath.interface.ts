import type { NumericalMath } from "../numerical-math";
import type { Fraction } from "../types";

export interface FractionMathInterface<TValue> extends NumericalMath<
  Fraction<TValue>
> {
  isInteger(value: Fraction<TValue>): boolean;

  reduce(value: Fraction<TValue>): Fraction<TValue>;
}
