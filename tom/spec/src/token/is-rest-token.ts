import type { RestToken } from "./rest-token";
import { REST_TOKEN_PREFIX } from "./rest-token-prefix";

/**
 *
 */
export function isRestToken(maybeRest: string): maybeRest is RestToken {
  return maybeRest.startsWith(REST_TOKEN_PREFIX);
}
