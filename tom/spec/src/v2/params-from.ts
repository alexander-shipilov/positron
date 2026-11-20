import type { ParamFrom } from "./param-from";

export type ParamsFrom<TTokens extends readonly string[]> =
  TTokens extends readonly []
    ? []
    : TTokens extends readonly [
          infer First extends string,
          ...infer Tail extends readonly string[],
        ]
      ? [ParamFrom<First>, ...ParamsFrom<Tail>]
      : TTokens extends readonly [
            ...infer Head extends readonly string[],
            infer Last extends string,
          ]
        ? [...ParamsFrom<Head>, ParamFrom<Last>]
        : ParamFrom<TTokens[number]>[];
