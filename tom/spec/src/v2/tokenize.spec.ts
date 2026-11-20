import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any, Nullish, Optional } from "@positron/lang";

import type { Multiplicity } from "./multiplicity";
import type { Tokenize } from "./tokenize";

describe("type Tokenize<A, R, O, M>", () => {
  type R = Multiplicity.One;
  type O = Multiplicity.ZeroOne;
  type M = Multiplicity.ZeroMore;

  type X = number;
  type Y = string;

  it("should be `[]` if `A` is `[]`", () => {
    expectTypeOf<Tokenize<[], R, O, M>>().toEqualTypeOf<[]>();
  });

  it("should be `[R]` if `A` is `[X]` and `X` is not optional", () => {
    expectTypeOf<Tokenize<[X], R, O, M>>().toEqualTypeOf<[R]>();
    expectTypeOf<Tokenize<[Nullish<X>], R, O, M>>().toEqualTypeOf<[R]>();
  });

  it("should be `[O]` if `A` is `[X?]` or `X` is optional", () => {
    expectTypeOf<Tokenize<[X?], R, O, M>>().toEqualTypeOf<[O]>();
    expectTypeOf<Tokenize<[Optional<X>], R, O, M>>().toEqualTypeOf<[O]>();
    expectTypeOf<Tokenize<[undefined], R, O, M>>().toEqualTypeOf<[O]>();
  });

  it("should be `[R, O]` if `A` is `[X, Y?]`", () => {
    expectTypeOf<Tokenize<[X, Y?], R, O, M>>().toEqualTypeOf<[R, O]>();
    expectTypeOf<Tokenize<[X, Optional<Y>], R, O, M>>().toEqualTypeOf<[R, O]>();
    expectTypeOf<Tokenize<[X, undefined], R, O, M>>().toEqualTypeOf<[R, O]>();
  });

  it("should be `[O, O]` if `A` is `[X?, Y?]`", () => {
    expectTypeOf<Tokenize<[X?, Y?], R, O, M>>().toEqualTypeOf<[O, O]>();
    expectTypeOf<Tokenize<[Optional<X>, Optional<Y>], R, O, M>>() //
      .toEqualTypeOf<[O, O]>();
    expectTypeOf<Tokenize<[undefined, undefined], R, O, M>>() //
      .toEqualTypeOf<[O, O]>();
  });

  it("should be `[...O[], M]` if `A` is `X[]`", () => {
    expectTypeOf<Tokenize<X[], R, O, M>>().toEqualTypeOf<[...O[], M]>();
    expectTypeOf<Tokenize<Optional<X>[], R, O, M>>() //
      .toEqualTypeOf<[...O[], M]>();
    expectTypeOf<Tokenize<undefined[], R, O, M>>() //
      .toEqualTypeOf<[...O[], M]>();
  });

  it("should be `[...O[], M]` if `A` is `[...X[]]`", () => {
    expectTypeOf<Tokenize<[...X[]], R, O, M>>().toEqualTypeOf<[...O[], M]>();
    expectTypeOf<Tokenize<[...Optional<X>[]], R, O, M>>() //
      .toEqualTypeOf<[...O[], M]>();
    expectTypeOf<Tokenize<[...undefined[]], R, O, M>>() //
      .toEqualTypeOf<[...O[], M]>();
  });

  it("should be `never` if `A` is `never`", () => {
    expectTypeOf<Tokenize<never, R, O, M>>().toBeNever();
  });

  it("should be `any` if `A` is `any`", () => {
    expectTypeOf<Tokenize<Any, R, O, M>>().toBeAny();
  });
});
