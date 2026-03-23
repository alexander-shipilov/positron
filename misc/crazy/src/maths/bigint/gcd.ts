import { abs } from "./abs";

/**
 * @param value1
 * @param value2
 *
 * @public
 */
export function gcd(value1: bigint, value2: bigint): bigint {
  if (value1 !== 0n || value2 !== 0n) {
    let divisor = abs(value2);
    let remainder = abs(value1);

    while (remainder !== 0n) {
      [divisor, remainder] = [remainder, divisor % remainder];
    }

    return divisor;
  }

  throw new RangeError("Division by zero");
}
