import { NUMBER_UNIT } from "../unit/number-unit";

/**
 * @public
 */
export function isNumberUnit(maybeNumber: string): boolean {
  return maybeNumber.toLowerCase() === NUMBER_UNIT;
}
