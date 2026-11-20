import { isRestToken, toNonRestToken } from "../token";

import type { RestParamToken } from "./rest-param-token";
import { isParamName } from "./is-param-name";

/**
 * The {@link isRestParamToken} function determines if the passed
 * `maybeParam` is a rest parameter.
 *
 * @param maybeParam - Value to check
 *
 * @public
 */
export function isRestParamToken(
  maybeParam: string,
): maybeParam is RestParamToken {
  return isRestToken(maybeParam) && isParamName(toNonRestToken(maybeParam));
}
