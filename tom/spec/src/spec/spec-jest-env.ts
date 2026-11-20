import type { describe, expect, it } from "@jest/globals";

import type { Nominal } from "@positron/lang";

import type { Identifier } from "../identifier";
import type { OptionalParamToken, RestParamToken } from "../param";

import type { SpecFunction } from "./spec-function";

declare function func<T extends SpecFunction>(
  ...args: Params<Parameters<T>>
): Func<T>;

declare function param<TName extends string>(
  name: TName,
): TName extends OptionalParamToken<string> & RestParamToken<string>
  ? Invalid<TName>
  : TName extends OptionalParamToken<string>
    ? OptionalParamToken<Identifier>
    : TName extends RestParamToken<string>
      ? RestParamToken<Identifier>
      : Identifier;

type Args<TFunc extends SpecFunction> = Params<Parameters<TFunc>>;

type Func<TFunc extends SpecFunction> = <
  TArgs extends Params<Parameters<TFunc>>,
>(
  ...args: TArgs
) => (test: (...args: TArgs) => void) => void;

type Invalid<TName extends string> = Nominal<TName, "Invalid">;

type Params<TParams extends readonly unknown[]> = TParams extends readonly []
  ? []
  : TParams extends readonly [unknown, ...infer Rest]
    ? [Identifier, ...Params<Rest>]
    : TParams extends readonly [(infer First)?, ...infer Rest]
      ? Rest extends readonly []
        ? [OptionalParamToken<Identifier>]
        : Rest[number] extends First
          ? First extends Rest[number]
            ? [...OptionalParamToken<Identifier>[], RestParamToken<Identifier>]
            : [OptionalParamToken<Identifier>, ...Params<Rest>]
          : [OptionalParamToken<Identifier>, ...Params<Rest>]
      : never;

const a1: Args<(foo: number) => void> = [];
const a2: Args<(foo: number, bar?: string) => void> = [];
const a3: Args<(bar?: number | string, ...ted: number[]) => void> = [];
const a4: Args<(bar?: number, ...ted: number[]) => void> = [];
const a5: Args<(...ted: number[]) => void> = [];

func<(foo: number) => void>(param("foo"));
func<(foo: number, ...bar: number[]) => void>(param("foo"), param("...bar"));

func<((foo: number) => void) | ((foo: number, bar?: string) => void)>(
  param("foo"),
);

func<((foo: number) => void) | ((foo: number, bar?: string) => void)>(
  param("foo"),
  param("bar?"),
);

/**
 * The {@link SpecJestEnv} interface represents an object for executing tests.
 *
 * @public
 */
export type SpecJestEnv = {
  describe: typeof describe;
  expect: typeof expect;
  it: typeof it;
};
