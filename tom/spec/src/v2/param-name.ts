import type { Exception } from "./exception";
import type { NamedToken } from "./named-token";

export type ParamName<
  TTokens extends readonly NamedToken<string>[],
  TName extends string,
> = TName extends TTokens[number]["name"]
  ? Exception<`Duplicate identifier «${TName}»`>
  : TName;
