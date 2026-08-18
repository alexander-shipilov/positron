import type { Vector2 } from "../utils";

import type { OrderedAlgebra } from "./ordered-algebra";

/**
 * @public
 */
export interface IntegralAlgebra<TValue> extends OrderedAlgebra<TValue> {
  /**
   * @param arg1 -
   * @param arg2 -
   */
  divRem(arg1: TValue, arg2: TValue): Vector2<TValue>;

  /**
   * @param arg1 -
   * @param arg2 -
   */
  gcd(arg1: TValue, arg2: TValue): TValue;

  /**
   * @param arg1 -
   * @param arg2 -
   */
  lcm(arg1: TValue, arg2: TValue): TValue;

  /**
   * The {@link IntegralAlgebra#rem} method of the {@link IntegralAlgebra}
   * object performs the calculation of remainder.
   *
   * @param arg1 - The first operand
   * @param arg2 - The second operand
   */
  rem(arg1: TValue, arg2: TValue): TValue;

  /**
   * @param arg1 -
   * @param arg2 -
   */
  root(arg1: TValue, arg2: TValue): TValue;

  /**
   * @param arg1 -
   * @param arg2 -
   */
  rootRem(arg1: TValue, arg2: TValue): Vector2<TValue>;
}
