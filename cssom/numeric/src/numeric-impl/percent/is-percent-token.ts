import type { PercentToken } from "./percent-token";
import { PERCENT_TOKEN } from "./percent-token";

/**
 * @public
 */
export function isPercentToken(
  maybePercent: string,
): maybePercent is PercentToken {
  return maybePercent === PERCENT_TOKEN;
}
