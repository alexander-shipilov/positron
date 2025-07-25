import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "@positron/core";

import type { MetaType } from "./meta-type";

declare const Tag1: unique symbol;
type Tag1 = typeof Tag1;
type Value1 = 1;

declare const Tag2: unique symbol;
type Tag2 = typeof Tag2;
type Value2 = 2;

describe("MetaType<Type, T, V>", () => {
  type Type = unknown;
  type Type1 = MetaType<Type>;
  type Type2 = MetaType<Type, Tag1>;
  type Type3 = MetaType<Type, Tag1, Value1>;

  it("`MetaType<Type, T?, V?>` should extend `Type`, but not vise versa", () => {
    expectTypeOf<Type1>().toExtend<Type>();
    expectTypeOf<Type>().not.toExtend<Type1>();

    expectTypeOf<Type2>().toExtend<Type>();
    expectTypeOf<Type>().not.toExtend<Type2>();

    expectTypeOf<Type3>().toExtend<Type>();
    expectTypeOf<Type>().not.toExtend<Type3>();
  });

  it("`MetaType<Type, T, V?>` should extend `MetaType<Type>`, but not vise versa", () => {
    expectTypeOf<Type3>().toExtend<Type1>();
    expectTypeOf<Type1>().not.toExtend<Type3>();

    expectTypeOf<Type3>().toExtend<Type2>();
    expectTypeOf<Type2>().not.toExtend<Type3>();
  });

  it("`MetaType<Type, T, V>` should extend `MetaType<Type, T>`, but not vise versa", () => {
    expectTypeOf<Type3>().toExtend<Type2>();
    expectTypeOf<Type2>().not.toExtend<Type3>();
  });

  it("`MetaType<Type1>` should not extend `MetaType<Type2>` and vise versa", () => {
    type Type1 = MetaType<Value1>;
    type Type2 = MetaType<Value2>;
    expectTypeOf<Type1>().not.toExtend<Type2>();
    expectTypeOf<Type2>().not.toExtend<Type1>();
  });

  it("`MetaType<Type, T1>` should not extend `MetaType<Type, T2>` and vise versa", () => {
    type Type1 = MetaType<Type, Tag1>;
    type Type2 = MetaType<Type, Tag2>;
    expectTypeOf<Type1>().not.toExtend<Type2>();
    expectTypeOf<Type2>().not.toExtend<Type1>();
  });

  it("`MetaType<Type, T, V1>` should not extend `MetaType<Type, T, V2>` and vise versa", () => {
    type Type1 = MetaType<Type, Tag1, Value1>;
    type Type2 = MetaType<Type, Tag1, Value2>;
    expectTypeOf<Type1>().not.toExtend<Type2>();
    expectTypeOf<Type2>().not.toExtend<Type1>();
  });

  it(
    "`MetaType<MetaType<Type, T, V1>, T, V2>` should extend both" +
      " `MetaType<Type, T, V1>` and `MetaType<Type, T, V2>`",
    () => {
      type Type1 = MetaType<MetaType<Type, Tag1, Value1>, Tag1, Value2>;
      expectTypeOf<Type1>().toExtend<MetaType<Type, Tag1, Value1>>();
      expectTypeOf<Type1>().toExtend<MetaType<Type, Tag1, Value2>>();
    },
  );

  it(
    "`MetaType<MetaType<Type, T1, V1>, T2, V2>` should extend both" +
      " `MetaType<Type, T1, V1>` and `MetaType<Type, T2, V2>`",
    () => {
      type Type1 = MetaType<MetaType<Type, Tag1, Value1>, Tag2, Value2>;
      expectTypeOf<Type1>().toExtend<MetaType<Type, Tag1, Value1>>();
      expectTypeOf<Type1>().toExtend<MetaType<Type, Tag2, Value2>>();
      expectTypeOf<Type1>().toExtend<
        MetaType<Type, Tag1 | Tag2, Value1 | Value2>
      >();
    },
  );

  it("`MetaType<any>` should be `any`", () => {
    expectTypeOf<MetaType<Any, Tag1, Value1>>().toBeAny();
  });

  it("`MetaType<never>` should be `never`", () => {
    expectTypeOf<MetaType<never, Tag1, Value1>>().toBeNever();
  });
});
