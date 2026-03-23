/**
 * @param value1
 * @param value2
 *
 * @public
 */
export function div(value1: bigint, value2: bigint): bigint {
  if (value1 % value2 !== 0n) {
    throw new RangeError("Result of division is not a bigint");
  }

  return value1 / value2;
}
