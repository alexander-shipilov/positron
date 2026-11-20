import type { Exception } from "./exception";
import type { Multiplicity } from "./multiplicity";
import type { NamedToken } from "./named-token";
import type { OptionalParamName } from "./optional-param-name";
import type { RequiredParamName } from "./required-param-name";
import type { RestParamName } from "./rest-param-name";

export interface ParamsFactory<
  TTokens extends readonly NamedToken<string>[] = readonly [],
> {
  (): TTokens;

  optional<TName extends string>(
    name: OptionalParamName<TTokens, TName>,
  ): OptionalParamName<TTokens, TName> extends Exception<string>
    ? never
    : ParamsFactory<[...TTokens, NamedToken<TName, Multiplicity.ZeroOne>]>;

  required<TName extends string>(
    name: RequiredParamName<TTokens, TName>,
  ): RequiredParamName<TTokens, TName> extends Exception<string>
    ? never
    : ParamsFactory<[...TTokens, NamedToken<TName, Multiplicity.One>]>;

  rest<TName extends string>(
    name: RestParamName<TTokens, TName>,
  ): RestParamName<TTokens, TName> extends Exception<string>
    ? never
    : ParamsFactory<[...TTokens, NamedToken<TName, Multiplicity.ZeroMore>]>;
}
