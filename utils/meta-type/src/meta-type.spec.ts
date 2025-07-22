import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "@positron/core/src";

import type { MetaType } from "./meta-type";

declare const T1: unique symbol;
type T1 = typeof T1;
type V1 = 1;

declare const T2: unique symbol;
type T2 = typeof T2;
type V2 = 2;

describe("MetaType<Type, T, V>", () => {
  it("`MetaType<Type, T, V>` should extend `Type`, but not vise versa", () => {
    type Type1 = MetaType<unknown, T1, V1>;
    expectTypeOf<Type1>().toExtend<unknown>();
    expectTypeOf<unknown>().not.toExtend<Type1>();
  });

  it("`MetaType<Type, T, V>` should extend `MetaType<Type>`, but not vise versa", () => {
    type Type1 = MetaType<unknown, T1, V1>;
    expectTypeOf<Type1>().toExtend<MetaType<unknown>>();
    expectTypeOf<MetaType<unknown>>().not.toExtend<Type1>();

    type Type2 = MetaType<unknown, T1>;
    expectTypeOf<Type2>().toExtend<MetaType<unknown>>();
    expectTypeOf<MetaType<unknown>>().not.toExtend<Type2>();
  });

  it("`MetaType<Type, T, V>` should extend `MetaType<Type>`, but not vise versa", () => {
    expectTypeOf<MetaType<1, T1, V1>>().toExtend<MetaType<1>>();
    expectTypeOf<MetaType<1>>().not.toExtend<MetaType<1, T1, V1>>();
  });

  it("`MetaType<Type, T, V>` should extend `MetaType<Type, T>`, but not vise versa", () => {
    expectTypeOf<MetaType<1, T1, V1>>().toExtend<MetaType<1, T1>>();
    expectTypeOf<MetaType<1, T1>>().not.toExtend<MetaType<1, T1, V1>>();
  });

  it("`MetaType<Type1, T, V>` should not extend `MetaType<Type2, T, V>`", () => {
    type Type1 = MetaType<1, T1, V1>;
    type Type2 = MetaType<2, T1, V1>;
    expectTypeOf<Type1>().not.toExtend<Type2>();
    expectTypeOf<Type2>().not.toExtend<Type1>();
  });

  it("`MetaType<Type, T, V1>` should not extend `MetaType<Type, T, V2>`", () => {
    type Type1 = MetaType<1, T1, 1>;
    type Type2 = MetaType<1, T1, 2>;
    expectTypeOf<Type1>().not.toExtend<Type2>();
    expectTypeOf<Type2>().not.toExtend<Type1>();
  });

  it(
    "`MetaType<MetaType<Type, T1, V1>, T2, V2>` should be" +
      " `MetaType<Type, T1 | T2, V1 | V2>`",
    () => {
      type Type1 = MetaType<MetaType<1, T1, V1>, T2, V2>;
      expectTypeOf<Type1>().toExtend<MetaType<1, T1 | T2, V1 | V2>>();
    },
  );

  it("`MetaType<any>` should be `any`", () => {
    expectTypeOf<MetaType<Any, T1, V1>>().toBeAny();
  });

  it("`MetaType<never>` should be `never`", () => {
    expectTypeOf<MetaType<never, T1, V1>>().toBeNever();
  });
});
