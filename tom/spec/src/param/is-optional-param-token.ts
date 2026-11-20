import { isOptionalToken, toNonOptionalToken } from "../token";

import type { OptionalParamToken } from "./optional-param-token";
import { isParamName } from "./is-param-name";

/**
 * The {@link isOptionalParamToken} function determines if the passed
 * `maybeParam` is an optional parameter.
 *
 * @param maybeParam - Value to check
 *
 * @public
 */
export function isOptionalParamToken(
  maybeParam: string,
): maybeParam is OptionalParamToken {
  return (
    isOptionalToken(maybeParam) && isParamName(toNonOptionalToken(maybeParam))
  );
}
