import type { Tokens } from "../token";

import type { Callable } from "./callable";

export type CallableTokens<
  TCallable extends Callable,
  TToken extends string = string,
> = TCallable extends Callable<infer Args> ? Tokens<Args, TToken> : never;
