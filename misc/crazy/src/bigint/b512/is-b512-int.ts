import type { B512Int } from "./b512-int";

const MAX = (1n << 512n) - 1n;
const MIN = -MAX;

/**
 * The {@link isB512Int} function determines whether the passed bigint
 * `maybeB512Int` is an {@Link B512Int}.
 *
 * @param maybeB512Int - The value to be checked.
 *
 * @public
 */
export function isB512Int(maybeB512Int: bigint): maybeB512Int is B512Int {
  return maybeB512Int >= MIN && maybeB512Int <= MAX;
}
