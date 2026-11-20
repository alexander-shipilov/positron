import type { OptionalToken } from "./optional-token";
import { OPTIONAL_TOKEN_POSTFIX } from "./optional-token-postfix";

/**
 *
 */
export function isOptionalToken(
  maybeOptional: string,
): maybeOptional is OptionalToken {
  return maybeOptional.endsWith(OPTIONAL_TOKEN_POSTFIX);
}
