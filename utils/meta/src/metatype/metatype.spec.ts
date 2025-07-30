import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "@positron/core";

import type { Metatype } from "./metatype";

declare const Tag1: unique symbol;
type Tag1 = typeof Tag1;
type Value1 = 1;

declare const Tag2: unique symbol;
type Tag2 = typeof Tag2;
type Value2 = 2;

describe("Metatype<Type, T, V>", () => {
  type Type = unknown;
  type Type1 = Metatype<Type>;
  type Type2 = Metatype<Type, Tag1>;
  type Type3 = Metatype<Type, Tag1, Value1>;

  it("`Metatype<Type, T?, V?>` should extend `Type`, but not vise versa", () => {
    expectTypeOf<Type1>().toExtend<Type>();
    expectTypeOf<Type>().not.toExtend<Type1>();

    expectTypeOf<Type2>().toExtend<Type>();
    expectTypeOf<Type>().not.toExtend<Type2>();

    expectTypeOf<Type3>().toExtend<Type>();
    expectTypeOf<Type>().not.toExtend<Type3>();
  });

  it("`Metatype<Type, T, V?>` should extend `Metatype<Type>`, but not vise versa", () => {
    expectTypeOf<Type3>().toExtend<Type1>();
    expectTypeOf<Type1>().not.toExtend<Type3>();

    expectTypeOf<Type3>().toExtend<Type2>();
    expectTypeOf<Type2>().not.toExtend<Type3>();
  });

  it("`Metatype<Type, T, V>` should extend `Metatype<Type, T>`, but not vise versa", () => {
    expectTypeOf<Type3>().toExtend<Type2>();
    expectTypeOf<Type2>().not.toExtend<Type3>();
  });

  it("`Metatype<Type1>` should not extend `Metatype<Type2>` and vise versa", () => {
    type Type1 = Metatype<Value1>;
    type Type2 = Metatype<Value2>;
    expectTypeOf<Type1>().not.toExtend<Type2>();
    expectTypeOf<Type2>().not.toExtend<Type1>();
  });

  it("`Metatype<Type, T1>` should not extend `Metatype<Type, T2>` and vise versa", () => {
    type Type1 = Metatype<Type, Tag1>;
    type Type2 = Metatype<Type, Tag2>;
    expectTypeOf<Type1>().not.toExtend<Type2>();
    expectTypeOf<Type2>().not.toExtend<Type1>();
  });

  it("`Metatype<Type, T, V1>` should not extend `Metatype<Type, T, V2>` and vise versa", () => {
    type Type1 = Metatype<Type, Tag1, Value1>;
    type Type2 = Metatype<Type, Tag1, Value2>;
    expectTypeOf<Type1>().not.toExtend<Type2>();
    expectTypeOf<Type2>().not.toExtend<Type1>();
  });

  it(
    "`Metatype<Metatype<Type, T, V1>, T, V2>` should extend both" +
      " `Metatype<Type, T, V1>` and `Metatype<Type, T, V2>`",
    () => {
      type Type1 = Metatype<Metatype<Type, Tag1, Value1>, Tag1, Value2>;
      expectTypeOf<Type1>().toExtend<Metatype<Type, Tag1, Value1>>();
      expectTypeOf<Type1>().toExtend<Metatype<Type, Tag1, Value2>>();
    },
  );

  it(
    "`Metatype<Metatype<Type, T1, V1>, T2, V2>` should extend both" +
      " `Metatype<Type, T1, V1>` and `Metatype<Type, T2, V2>`",
    () => {
      type Type1 = Metatype<Metatype<Type, Tag1, Value1>, Tag2, Value2>;
      expectTypeOf<Type1>().toExtend<Metatype<Type, Tag1, Value1>>();
      expectTypeOf<Type1>().toExtend<Metatype<Type, Tag2, Value2>>();
      expectTypeOf<Type1>().toExtend<
        Metatype<Type, Tag1 | Tag2, Value1 | Value2>
      >();
    },
  );

  it("`Metatype<any>` should be `any`", () => {
    expectTypeOf<Metatype<Any, Tag1, Value1>>().toBeAny();
  });

  it("`Metatype<never>` should be `never`", () => {
    expectTypeOf<Metatype<never, Tag1, Value1>>().toBeNever();
  });
});
