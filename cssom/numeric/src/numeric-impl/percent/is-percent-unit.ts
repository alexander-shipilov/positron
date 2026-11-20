import { isPercentToken } from "./is-percent-token";
import { PERCENT_UNIT } from "./percent-unit";

/**
 * @public
 */
export function isPercentUnit(maybePercent: string): boolean {
  return (
    isPercentToken(maybePercent) || maybePercent.toLowerCase() === PERCENT_UNIT
  );
}
