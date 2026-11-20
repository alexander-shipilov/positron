import type { RestToken } from "./rest-token";
import { REST_TOKEN_PREFIX } from "./rest-token-prefix";

/**
 * The {@link isRestToken} function determines if the passed `maybeRestToken`
 * starts with the rest prefix `...`.
 *
 * @param maybeRestToken - The token to be checked.
 *
 * @public
 */
export function isRestToken(
  maybeRestToken: string,
): maybeRestToken is RestToken {
  return maybeRestToken.startsWith(REST_TOKEN_PREFIX);
}
