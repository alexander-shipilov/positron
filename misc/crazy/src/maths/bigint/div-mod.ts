import { mod } from "./mod";

/**
 * @param value1
 * @param value2
 *
 * @public
 */
export function divMod(value1: bigint, value2: bigint): [bigint, bigint] {
  const remainder = mod(value1, value2);

  return [(value1 - remainder) / value2, remainder];
}
