import { gcd } from "./gcd";

/**
 * @param value1
 * @param value2
 *
 * @public
 */
export function lcm(value1: bigint, value2: bigint): bigint {
  return value1 * (value2 / gcd(value1, value2));
}
