import type { IsAnyLike } from "@positron/lang";

export type Tokenize<
  TArray extends readonly unknown[],
  TRequired,
  TOptional,
  TMore,
> =
  IsAnyLike<TArray> extends true
    ? TArray
    : TArray extends readonly []
      ? []
      : number extends TArray["length"]
        ? [...TOptional[], TMore]
        : TArray extends readonly [infer First, ...infer Tail]
          ? [
              undefined extends First ? TOptional : TRequired,
              ...Tokenize<Tail, TRequired, TOptional, TMore>,
            ]
          : TArray extends readonly [...infer Head, infer Last]
            ? [
                ...Tokenize<Head, TRequired, TOptional, TMore>,
                undefined extends Last ? TOptional : TRequired,
              ]
            : TArray extends readonly [unknown?, ...infer Tail]
              ? [TOptional, ...Tokenize<Tail, TRequired, TOptional, TMore>]
              : [];
