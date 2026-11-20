import type { OptionalToken } from "./optional-token";
import { OPTIONAL_TOKEN_POSTFIX } from "./optional-token-postfix";

/**
 *
 */
export function toNonOptionalToken<TValue extends string>(
  optional: OptionalToken<TValue>,
): TValue {
  return optional.slice(0, -OPTIONAL_TOKEN_POSTFIX.length) as TValue;
}
