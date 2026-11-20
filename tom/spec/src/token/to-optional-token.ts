import type { OptionalToken } from "./optional-token";
import { OPTIONAL_TOKEN_POSTFIX } from "./optional-token-postfix";

/**
 *
 */
export function toOptionalToken<TToken extends string>(
  token: TToken,
): OptionalToken<TToken> {
  return `${token}${OPTIONAL_TOKEN_POSTFIX}`;
}
