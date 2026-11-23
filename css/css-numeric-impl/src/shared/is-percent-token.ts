import type { PercentToken } from "./percent-token";
import { PERCENT_TOKEN } from "./percent-token";

/**
 * The {@link isPercentToken} type-guard function determines whether
 * `maybePercent` is the `"%"` percentage token.
 *
 * @param maybePercent - The string value to inspect.
 *
 * @returns `true` if `maybePercent` is `"%"`; otherwise, `false`.
 *
 * @public
 */
export function isPercentToken(
  maybePercent: string,
): maybePercent is PercentToken {
  return maybePercent === PERCENT_TOKEN;
}
