import type { Vector2 } from "../../utils";
import type { NumericalMath } from "../numerical-math";

/**
 * @public
 */
export interface IntegralMath<TValue> extends NumericalMath<TValue> {
  /**
   * @param value1
   * @param value2
   */
  divMod(value1: TValue, value2: TValue): Vector2<TValue>;

  /**
   * @param value1
   * @param value2
   */
  gcd(value1: TValue, value2: TValue): TValue;

  /**
   * @param value1
   * @param value2
   */
  lcm(value1: TValue, value2: TValue): TValue;

  /**
   * @param value1
   * @param value2
   */
  mod(value1: TValue, value2: TValue): TValue;

  /**
   * @param value1
   * @param value2
   */
  root(value1: TValue, value2: TValue): TValue;

  /**
   * @param value1
   * @param value2
   */
  rootMod(value1: TValue, value2: TValue): Vector2<TValue>;
}
