import type { Nominal } from "@positron/lang";

import type { ParamType } from "../param";
import type { OptionalToken, RestToken } from "../token";

import type { Param } from "./param";

type InvalidParam<TName> = Nominal<TName, "Invalid">;

type ValidParam<TName, TParam extends Param> = TName extends ""
  ? InvalidParam<TName>
  : TParam;

export type ParamFrom<TToken extends string> = TToken extends ""
  ? InvalidParam<TToken>
  : TToken extends OptionalToken<infer Name>
    ? Name extends RestToken
      ? InvalidParam<TToken>
      : ValidParam<Name, Param<ParamType.Optional>>
    : TToken extends RestToken<infer Name>
      ? ValidParam<Name, Param<ParamType.Rest>>
      : ValidParam<TToken, Param<ParamType.Required>>;
