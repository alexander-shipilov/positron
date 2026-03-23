import type { NumberMath } from "../number-math";
import type { Fraction } from "../types";

export interface FractionMathInterface<TValue> extends NumberMath<
  Fraction<TValue>
> {
  isInteger(value: Fraction<TValue>): boolean;

  reduce(value: Fraction<TValue>): Fraction<TValue>;
}
