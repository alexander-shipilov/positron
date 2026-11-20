import type { RequiredParamToken } from "./required-param-token";
import { isParamName } from "./is-param-name";

/**
 * The {@link isRequiredParamToken} function determines if the passed
 * `maybeParam` is a required parameter.
 *
 * @param maybeParam - Value to check
 *
 * @public
 */
export function isRequiredParamToken(
  maybeParam: string,
): maybeParam is RequiredParamToken {
  return isParamName(maybeParam);
}
