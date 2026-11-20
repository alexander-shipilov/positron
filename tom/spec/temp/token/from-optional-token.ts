import type { OptionalToken } from "./optional-token";
import { OPTIONAL_TOKEN_POSTFIX } from "./optional-token-postfix";

/**
 * The {@link fromOptionalToken} function extracts a token from the passed
 * {@link OptionalToken}.
 *
 * @param optionalToken - The optional token to extract token from.
 */
export function fromOptionalToken<TToken extends string>(
  optionalToken: OptionalToken<TToken>,
): TToken {
  return optionalToken.slice(0, -OPTIONAL_TOKEN_POSTFIX.length) as TToken;
}
