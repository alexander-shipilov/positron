import { Pow } from "./pow";

/**
 * @param maybePow
 *
 * @public
 */
export function isPow(maybePow: unknown): maybePow is Pow {
  return maybePow instanceof Pow;
}
