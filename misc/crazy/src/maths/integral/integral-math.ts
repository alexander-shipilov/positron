import type { Vector2 } from "../../utils";
import type { NumberMath } from "../number-math";

export interface IntegralMath<TValue> extends NumberMath<TValue> {
  mod(value1: TValue, value2: TValue): TValue;

  divMod(value1: TValue, value2: TValue): Vector2<TValue>;

  gcd(value1: TValue, value2: TValue): TValue;

  lcm(value1: TValue, value2: TValue): TValue;
}
