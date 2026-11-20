import type { RestToken } from "./rest-token";
import { REST_TOKEN_PREFIX } from "./rest-token-prefix";

/**
 *
 */
export function toRestToken<TToken extends string>(
  token: TToken,
): RestToken<TToken> {
  return `${REST_TOKEN_PREFIX}${token}`;
}
