import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { UnknownObject } from "@positron/core";

import type {
  Integer,
  IntegerType,
  Natural,
  NaturalType,
  Positive
} from "../@fixtures/nominal";

import type { Nominal } from "./nominal";

describe("Nominal<T, U>", () => {
  it("`Nominal<T, ...>` should extend `T`", () => {
    expectTypeOf<Nominal<string>>().toExtend<string>();
    expectTypeOf<Nominal<[]>>().toExtend<[]>();
    expectTypeOf<Nominal<UnknownObject>>().toExtend<UnknownObject>();

    expectTypeOf<Integer>().toExtend<number>();
    expectTypeOf<Natural>().toExtend<number>();
    expectTypeOf<Natural>().toExtend<Integer>();
    expectTypeOf<Natural>().toExtend<Natural>();
  });

  it("`Nominal<T, U>` should extend `Nominal`", () => {
    expectTypeOf<Integer>().toExtend<Nominal>();
    expectTypeOf<Natural>().toExtend<Nominal>();
  });

  it("`Nominal<T, U>` should extend `Nominal<T>`", () => {
    expectTypeOf<Integer>().toExtend<Nominal<number>>();
    expectTypeOf<Natural>().toExtend<Nominal<number>>();
  });

  it("`Nominal<Nominal<T, ...>, ...>` should extend `Nominal<T>`", () => {
    expectTypeOf<Integer>().toExtend<Nominal<number>>();
    expectTypeOf<Natural>().toExtend<Nominal<number>>();
  });

  it("`T` should not extend `Nominal<T, ...>`", () => {
    expectTypeOf<number>().not.toExtend<Integer>();
    expectTypeOf<number>().not.toExtend<Natural>();
    expectTypeOf<Integer>().not.toExtend<Natural>();
  });

  it("`Nominal<T, U1>` should not extend `Nominal<T, U2>`", () => {
    expectTypeOf<Positive>().not.toExtend<Natural>();
    expectTypeOf<Natural>().not.toExtend<Positive>();
  });

  it("should not add `U` if `T` is already `Nominal<unknown, U>`", () => {
    expectTypeOf<Nominal<Natural, NaturalType>>().toEqualTypeOf<Natural>();
    expectTypeOf<Nominal<Natural, IntegerType>>().toEqualTypeOf<Natural>();
  });
});
