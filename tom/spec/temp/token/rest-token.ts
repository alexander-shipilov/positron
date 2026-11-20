import type { RestTokenPrefix } from "./rest-token-prefix";

/**
 * The {@link RestToken} type represents a token started with the rest prefix
 * `...`.
 *
 * @public
 */
export type RestToken<TToken extends string = string> =
  `${RestTokenPrefix}${TToken}`;
