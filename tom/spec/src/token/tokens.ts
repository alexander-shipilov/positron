import type { OptionalToken } from "./optional-token";
import type { RestToken } from "./rest-token";

export type Tokens<
  TArray extends readonly unknown[],
  TToken extends string = string,
> = TArray extends readonly []
  ? []
  : TArray extends readonly [infer First, ...infer Tail]
    ? [
        undefined extends First ? OptionalToken<TToken> : TToken,
        ...Tokens<Tail, TToken>,
      ]
    : TArray extends readonly [...infer Head, infer Last]
      ? [
          ...Tokens<Head, TToken>,
          undefined extends Last ? OptionalToken<TToken> : TToken,
        ]
      : TArray extends readonly [(infer First)?, ...infer Tail]
        ? Tail extends readonly []
          ? [OptionalToken<TToken>]
          : Tail[number] extends First
            ? First extends Tail[number]
              ? [...OptionalToken<TToken>[], RestToken<TToken>]
              : [OptionalToken<TToken>, ...Tokens<Tail, TToken>]
            : [OptionalToken<TToken>, ...Tokens<Tail, TToken>]
        : [];
