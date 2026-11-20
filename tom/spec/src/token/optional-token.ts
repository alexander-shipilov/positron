import type { OptionalTokenPostfix } from "./optional-token-postfix";

export type OptionalToken<TToken extends string = string> =
  `${TToken}${OptionalTokenPostfix}`;
