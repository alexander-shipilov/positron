import type { OrderedAlgebra } from "../ordered-algebra";

import type { Fraction } from "./fraction";

/**
 * @public
 */
export interface FractionMath<TValue> extends OrderedAlgebra<Fraction<TValue>> {
  /**
   * @param value
   */
  isInteger(value: Fraction<TValue>): boolean;

  /**
   * @param value
   */
  reduce(value: Fraction<TValue>): Fraction<TValue>;
}
