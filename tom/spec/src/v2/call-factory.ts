import type { Callable } from "../callable";
import type { Tokens } from "../token";

import type { Call } from "./call";
import type { Param } from "./param";
import type { ParamsFrom } from "./params-from";

export interface CallFactory<
  TCallable extends Callable,
  TParams extends readonly Param[] = [],
> {
  (): Call<TParams>;

  params<TTokens extends Tokens<Parameters<TCallable>>>(
    ...tokens: TTokens
  ): Exclude<CallFactory<TCallable, ParamsFrom<TTokens>>, "params">;
}
