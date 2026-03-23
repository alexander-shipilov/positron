import { Sub } from "./sub";

/**
 * @param maybeSub
 *
 * @public
 */
export function isSub(maybeSub: unknown): maybeSub is Sub {
  return maybeSub instanceof Sub;
}
