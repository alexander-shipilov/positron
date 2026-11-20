import type { RestToken } from "./rest-token";
import { REST_TOKEN_PREFIX } from "./rest-token-prefix";

/**
 * The {@link fromRestToken} function extract a token from the passed
 * {@link RestToken}.
 *
 * @param restToken - The rest token to extract token from.
 */
export function fromRestToken<TToken extends string>(
  restToken: RestToken<TToken>,
): TToken {
  return restToken.slice(REST_TOKEN_PREFIX.length) as TToken;
}
