import type { Exception } from "./exception";
import type { Multiplicity } from "./multiplicity";
import type { NamedToken } from "./named-token";
import type { ParamName } from "./param-name";

export type OptionalParamName<
  TTokens extends readonly NamedToken<string>[],
  TName extends string,
> = Multiplicity.ZeroMore extends TTokens[number]["multiplicity"]
  ? Exception<`An optional parameter cannot follow a rest parameter`>
  : ParamName<TTokens, TName>;
