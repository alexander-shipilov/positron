import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "@positron/core";

import type { Metatype } from "./metatype";

declare const T1: unique symbol;
type T1 = typeof T1;
type V1 = 1;

declare const T2: unique symbol;
type T2 = typeof T2;
type V2 = 2;

describe("Metatype<Type, T, V>", () => {
  it("`Metatype<Type, T, V>` should extend `Type`, but not vise versa", () => {
    type Type1 = Metatype<unknown, T1, V1>;
    expectTypeOf<Type1>().toExtend<unknown>();
    expectTypeOf<unknown>().not.toExtend<Type1>();
  });

  it("`Metatype<Type, T, V>` should extend `Metatype<Type>`, but not vise versa", () => {
    type Type1 = Metatype<unknown, T1, V1>;
    expectTypeOf<Type1>().toExtend<Metatype<unknown>>();
    expectTypeOf<Metatype<unknown>>().not.toExtend<Type1>();

    type Type2 = Metatype<unknown, T1>;
    expectTypeOf<Type2>().toExtend<Metatype<unknown>>();
    expectTypeOf<Metatype<unknown>>().not.toExtend<Type2>();
  });

  it("`Metatype<Type, T, V>` should extend `Metatype<Type>`, but not vise versa", () => {
    expectTypeOf<Metatype<1, T1, V1>>().toExtend<Metatype<1>>();
    expectTypeOf<Metatype<1>>().not.toExtend<Metatype<1, T1, V1>>();
  });

  it("`Metatype<Type, T, V>` should extend `Metatype<Type, T>`, but not vise versa", () => {
    expectTypeOf<Metatype<1, T1, V1>>().toExtend<Metatype<1, T1>>();
    expectTypeOf<Metatype<1, T1>>().not.toExtend<Metatype<1, T1, V1>>();
  });

  it("`Metatype<Type1, T, V>` should not extend `Metatype<Type2, T, V>`", () => {
    type Type1 = Metatype<1, T1, V1>;
    type Type2 = Metatype<2, T1, V1>;
    expectTypeOf<Type1>().not.toExtend<Type2>();
    expectTypeOf<Type2>().not.toExtend<Type1>();
  });

  it("`Metatype<Type, T, V1>` should not extend `Metatype<Type, T, V2>`", () => {
    type Type1 = Metatype<1, T1, 1>;
    type Type2 = Metatype<1, T1, 2>;
    expectTypeOf<Type1>().not.toExtend<Type2>();
    expectTypeOf<Type2>().not.toExtend<Type1>();
  });

  it(
    "`Metatype<Metatype<Type, T1, V1>, T2, V2>` should be" +
      " `Metatype<Type, T1 | T2, V1 | V2>`",
    () => {
      type Type1 = Metatype<Metatype<1, T1, V1>, T2, V2>;
      expectTypeOf<Type1>().toExtend<Metatype<1, T1 | T2, V1 | V2>>();
    },
  );

  it("`Metatype<any>` should be `any`", () => {
    expectTypeOf<Metatype<Any, T1, V1>>().toBeAny();
  });

  it("`Metatype<never>` should be `never`", () => {
    expectTypeOf<Metatype<never, T1, V1>>().toBeNever();
  });
});
