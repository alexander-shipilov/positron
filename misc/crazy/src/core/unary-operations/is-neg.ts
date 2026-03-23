import { Neg } from "./neg";

/**
 * @param maybeNeg
 *
 * @public
 */
export function isNeg(maybeNeg: unknown): maybeNeg is Neg {
  return maybeNeg instanceof Neg;
}
