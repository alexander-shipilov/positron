import type { OptionalParamToken } from "./optional-param-token";
import type { RequiredParamToken } from "./required-param-token";
import type { RestParamToken } from "./rest-param-token";

export type ParamTokensFrom<TParams extends readonly unknown[]> =
  TParams extends readonly []
    ? []
    : TParams extends readonly undefined[]
      ? []
      : TParams extends readonly [unknown, ...infer Rest]
        ? [RequiredParamToken, ...ParamTokensFrom<Rest>]
        : TParams extends readonly [(infer First)?, ...infer Rest]
          ? Rest extends readonly []
            ? [OptionalParamToken]
            : Rest[number] extends First
              ? First extends Rest[number]
                ? [...OptionalParamToken[], RestParamToken]
                : [OptionalParamToken, ...ParamTokensFrom<Rest>]
              : [OptionalParamToken, ...ParamTokensFrom<Rest>]
          : [];
