import type { Exception } from "./exception";
import type { Multiplicity } from "./multiplicity";
import type { NamedToken } from "./named-token";
import type { ParamName } from "./param-name";

export type RequiredParamName<
  TTokens extends readonly NamedToken<string>[],
  TName extends string,
> = TTokens[number]["multiplicity"] extends Multiplicity.One
  ? ParamName<TTokens, TName>
  : Exception<`A required parameter cannot follow an optional parameter`>;
