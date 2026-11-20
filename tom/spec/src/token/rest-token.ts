import type { RestTokenPrefix } from "./rest-token-prefix";

export type RestToken<TToken extends string = string> =
  `${RestTokenPrefix}${TToken}`;
