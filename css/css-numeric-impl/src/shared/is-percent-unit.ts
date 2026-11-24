import { isPercentToken } from "./is-percent-token";
import { PERCENT_UNIT } from "./percent-unit";

/**
 * The {@link isPercentUnit} function determines whether `maybePercent`
 * represents a percentage unit (`"%"` or `"percent"` in any character case).
 *
 * @param maybePercent - The string value to inspect.
 *
 * @returns `true` if `maybePercent` is `"%"` or `"percent"`
 *   case-insensitively; otherwise, `false`.
 *
 * @public
 */
export function isPercentUnit(maybePercent: string): boolean {
  return (
    isPercentToken(maybePercent) || maybePercent.toLowerCase() === PERCENT_UNIT
  );
}
