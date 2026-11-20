import type { Callable } from "../callable";
import type { Identifier } from "../identifier";
import type { Tokens } from "../token";

import type { Method } from "./method";
import type { Param } from "./param";
import type { ParamsFrom } from "./params-from";
import type { SignatureKey } from "./signature-key";

export interface MethodFactory<
  TKey extends SignatureKey,
  TCallable extends Callable,
  TParams extends readonly Param[] = readonly [],
> {
  (): Method<TKey, TParams>;

  params<TTokens extends Tokens<Parameters<TCallable>, Identifier>>(
    ...tokens: TTokens
  ): Exclude<MethodFactory<TKey, TCallable, ParamsFrom<TTokens>>, "params">;
}
