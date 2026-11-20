import type { OptionalTokenPostfix } from "./optional-token-postfix";

/**
 * The {@link OptionalToken} type represents a token ended with the optional
 * postfix `?`.
 *
 * @public
 */
export type OptionalToken<TToken extends string = string> =
  `${TToken}${OptionalTokenPostfix}`;
