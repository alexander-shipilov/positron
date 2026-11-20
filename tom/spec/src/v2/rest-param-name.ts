import type { Exception } from "./exception";
import type { Multiplicity } from "./multiplicity";
import type { NamedToken } from "./named-token";
import type { ParamName } from "./param-name";

export type RestParamName<
  TTokens extends readonly NamedToken<string>[],
  TName extends string,
> = Multiplicity.ZeroMore extends TTokens[number]["multiplicity"]
  ? Exception<`A rest parameter cannot follow a rest parameter`>
  : ParamName<TTokens, TName>;
