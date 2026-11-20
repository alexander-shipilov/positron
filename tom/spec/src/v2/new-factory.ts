import type { Identifier } from "../identifier";
import type { Instantiable } from "../instantiable";
import type { Tokens } from "../token";

import type { New } from "./new";
import type { Param } from "./param";
import type { ParamsFrom } from "./params-from";

export interface NewFactory<
  TTarget extends Instantiable,
  TParams extends readonly Param[] = readonly [],
> {
  (): New<TParams>;

  params<TTokens extends Tokens<ConstructorParameters<TTarget>, Identifier>>(
    ...tokens: TTokens
  ): Exclude<NewFactory<TTarget, ParamsFrom<TTokens>>, "params">;
}
