import type { OptionalToken } from "./optional-token";
import { OPTIONAL_TOKEN_POSTFIX } from "./optional-token-postfix";

/**
 * The {@link isOptionalToken} function determines if the passed
 * `maybeOptionalToken` ends with the optional postfix `?`.
 *
 * @param maybeOptionalToken - The token to be checked.
 *
 * @public
 */
export function isOptionalToken(
  maybeOptionalToken: string,
): maybeOptionalToken is OptionalToken {
  return maybeOptionalToken.endsWith(OPTIONAL_TOKEN_POSTFIX);
}
