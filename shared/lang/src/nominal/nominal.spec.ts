import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";

import type { Nominal } from "./nominal";

describe("type Nominal<T, M>", () => {
  type Real = Nominal<number, "real">;
  type Integer = Nominal<Real, "integer">;
  type Natural = Nominal<Integer, "natural">;
  type NegativeInteger = Nominal<Integer, "negative">;

  it("`Nominal<T, ...>` should extend `T`", () => {
    expectTypeOf<Nominal<string>>().toExtend<string>();
    expectTypeOf<Nominal<[]>>().toExtend<[]>();
    expectTypeOf<Nominal<Record<string, unknown>>>().toExtend<
      Record<string, unknown>
    >();

    expectTypeOf<Real>().toExtend<number>();

    expectTypeOf<Integer>().toExtend<number>();
    expectTypeOf<Integer>().toExtend<Real>();

    expectTypeOf<Natural>().toExtend<number>();
    expectTypeOf<Natural>().toExtend<Real>();
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

  it("`T` should not extend `Nominal<T, ...>`", () => {
    expectTypeOf<number>().not.toExtend<Real>();
    expectTypeOf<number>().not.toExtend<Integer>();
    expectTypeOf<number>().not.toExtend<Natural>();

    expectTypeOf<Real>().not.toExtend<Integer>();
    expectTypeOf<Real>().not.toExtend<Natural>();

    expectTypeOf<Integer>().not.toExtend<Natural>();
  });

  it("`Nominal<T, U1>` should not extend `Nominal<T, U2>`", () => {
    expectTypeOf<NegativeInteger>().not.toExtend<Natural>();
    expectTypeOf<Natural>().not.toExtend<NegativeInteger>();
  });

  it("`Nominal<unknown>` should not be `unknown`", () => {
    expectTypeOf<Nominal>().not.toBeUnknown();
  });

  it("`Nominal<never>` should be `never`", () => {
    expectTypeOf<Nominal<never>>().toBeNever();
  });

  it("`Nominal<any>` should be `any`", () => {
    expectTypeOf<Nominal<Any>>().toBeAny();
  });
});
