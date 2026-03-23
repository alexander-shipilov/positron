/**
 * @param value1
 * @param value2
 *
 * @public
 */
export function compare(value1: bigint, value2: bigint): number {
  return value1 > value2 ? 1 : value1 < value2 ? -1 : 0;
}
