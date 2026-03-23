import { Mul } from "./mul";

/**
 * @param maybeMul
 *
 * @public
 */
export function isMul(maybeMul: unknown): maybeMul is Mul {
  return maybeMul instanceof Mul;
}
