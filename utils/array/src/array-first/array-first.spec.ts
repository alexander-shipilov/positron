import type { Any, Optional } from "@positron/core";

import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ArrayFirst } from "./array-first";

describe("ArrayFirst<T>", () => {
  type Type1 = number;
  type Type2 = string;
  type Type3 = boolean;
  type Type4 = symbol;

  it("should be `Type1` if `T` is `[Type1, ...unknown[]]`", () => {
    type T1 = [Type1];
    expectTypeOf<ArrayFirst<T1>>().toEqualTypeOf<Type1>();
    expectTypeOf<ArrayFirst<Readonly<T1>>>().toEqualTypeOf<Type1>();

    type T2 = [Type1, Type2];
    expectTypeOf<ArrayFirst<T2>>().toEqualTypeOf<Type1>();
    expectTypeOf<ArrayFirst<Readonly<T2>>>().toEqualTypeOf<Type1>();

    type T3 = [Type1, ...Type2[]];
    expectTypeOf<ArrayFirst<T3>>().toEqualTypeOf<Type1>();
    expectTypeOf<ArrayFirst<Readonly<T3>>>().toEqualTypeOf<Type1>();

    type T4 = [Type1, Type2, ...Type3[]];
    expectTypeOf<ArrayFirst<T4>>().toEqualTypeOf<Type1>();
    expectTypeOf<ArrayFirst<Readonly<T4>>>().toEqualTypeOf<Type1>();
  });

  it("should be `Type` if `T` is `[...Type[]]`", () => {
    type T = [...Type1[]];
    expectTypeOf<ArrayFirst<T>>().toEqualTypeOf<Type1>();
    expectTypeOf<ArrayFirst<Readonly<T>>>().toEqualTypeOf<Type1>();
  });

  it("should be `Type1 | Type2` if `T` is `[...Type1[], Type2, ...]`", () => {
    type T1 = [...Type1[], Type2];
    expectTypeOf<ArrayFirst<T1>>().toEqualTypeOf<Type1 | Type2>();
    expectTypeOf<ArrayFirst<Readonly<T1>>>().toEqualTypeOf<Type1 | Type2>();

    type T2 = [...Type1[], Type2, Type3];
    expectTypeOf<ArrayFirst<T2>>().toEqualTypeOf<Type1 | Type2>();
    expectTypeOf<ArrayFirst<Readonly<T2>>>().toEqualTypeOf<Type1 | Type2>();

    type T3 = [...Type1[], Type2, Type3, Type4];
    expectTypeOf<ArrayFirst<T3>>().toEqualTypeOf<Type1 | Type2>();
    expectTypeOf<ArrayFirst<Readonly<T3>>>().toEqualTypeOf<Type1 | Type2>();
  });

  it("should be `Optional<Type>` if `T` is `[Type?]`", () => {
    type T = [Type1?];
    expectTypeOf<ArrayFirst<T>>().toEqualTypeOf<Optional<Type1>>();
    expectTypeOf<ArrayFirst<Readonly<T>>>().toEqualTypeOf<Optional<Type1>>();
  });

  it("should be `Type` if `T` is `Type[]`", () => {
    type T1 = Type1[];
    expectTypeOf<ArrayFirst<T1>>().toEqualTypeOf<Type1>();
    expectTypeOf<ArrayFirst<Readonly<T1>>>().toEqualTypeOf<Type1>();

    type T2 = (Type1 | Type2)[];
    expectTypeOf<ArrayFirst<T2>>().toEqualTypeOf<Type1 | Type2>();
    expectTypeOf<ArrayFirst<Readonly<T2>>>().toEqualTypeOf<Type1 | Type2>();
  });

  it("should be `never` if `T` is `[]`", () => {
    type T = [];
    expectTypeOf<ArrayFirst<T>>().toBeNever();
    expectTypeOf<ArrayFirst<Readonly<T>>>().toBeNever();
  });

  it("should be `never` if `T` is `never`", () => {
    expectTypeOf<ArrayFirst<never>>().toBeNever();
  });

  it("should be `unknown` if `T` is `any`", () => {
    expectTypeOf<ArrayFirst<Any>>().toBeUnknown();
  });
});
