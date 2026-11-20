import type { RestToken } from "./rest-token";
import { REST_TOKEN_PREFIX } from "./rest-token-prefix";

/**
 *
 */
export function toNonRestToken<TValue extends string>(
  rest: RestToken<TValue>,
): TValue {
  return rest.slice(REST_TOKEN_PREFIX.length) as TValue;
}
