import type { Any, Optional } from "@positron/lang-core";

import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ArrayLast } from "./array-last";

describe("ArrayLast<T>", () => {
  type Type1 = number;
  type Type2 = string;
  type Type3 = boolean;
  type Type4 = symbol;

  it("should be `Type` if `T` is `[...unknown[], Type]`", () => {
    type T1 = [Type1];
    expectTypeOf<ArrayLast<T1>>().toEqualTypeOf<Type1>();
    expectTypeOf<ArrayLast<Readonly<T1>>>().toEqualTypeOf<Type1>();

    type T2 = [Type1, Type2];
    expectTypeOf<ArrayLast<T2>>().toEqualTypeOf<Type2>();
    expectTypeOf<ArrayLast<Readonly<T2>>>().toEqualTypeOf<Type2>();

    type T3 = [...Type1[], Type2];
    expectTypeOf<ArrayLast<T3>>().toEqualTypeOf<Type2>();
    expectTypeOf<ArrayLast<Readonly<T3>>>().toEqualTypeOf<Type2>();

    type T4 = [...Type1[], Type2, Type3];
    expectTypeOf<ArrayLast<T4>>().toEqualTypeOf<Type3>();
    expectTypeOf<ArrayLast<Readonly<T4>>>().toEqualTypeOf<Type3>();
  });

  it("should be `Type` if `T` is `[...Type[]]`", () => {
    type T = [...Type1[]];
    expectTypeOf<ArrayLast<T>>().toEqualTypeOf<Type1>();
    expectTypeOf<ArrayLast<Readonly<T>>>().toEqualTypeOf<Type1>();
  });

  it("should be `Type1 | Type2` if `T` is `[..., Type1, ...Type2[]]`", () => {
    type T1 = [Type1, ...Type2[]];
    expectTypeOf<ArrayLast<T1>>().toEqualTypeOf<Type1 | Type2>();
    expectTypeOf<ArrayLast<Readonly<T1>>>().toEqualTypeOf<Type1 | Type2>();

    type T2 = [Type1, Type2, ...Type3[]];
    expectTypeOf<ArrayLast<T2>>().toEqualTypeOf<Type2 | Type3>();
    expectTypeOf<ArrayLast<Readonly<T2>>>().toEqualTypeOf<Type2 | Type3>();

    type T3 = [Type1, Type2, Type3, ...Type4[]];
    expectTypeOf<ArrayLast<T3>>().toEqualTypeOf<Type3 | Type4>();
    expectTypeOf<ArrayLast<Readonly<T3>>>().toEqualTypeOf<Type3 | Type4>();
  });

  it("should be `Optional<Type>` if `T` is `[Type?]`", () => {
    type T = [Type1?];
    expectTypeOf<ArrayLast<T>>().toEqualTypeOf<Optional<Type1>>();
    expectTypeOf<ArrayLast<Readonly<T>>>().toEqualTypeOf<Optional<Type1>>();
  });

  it("should be `Type` if `T` is `Type[]`", () => {
    type T1 = Type1[];
    expectTypeOf<ArrayLast<T1>>().toEqualTypeOf<Type1>();
    expectTypeOf<ArrayLast<Readonly<T1>>>().toEqualTypeOf<Type1>();

    type T2 = (Type1 | Type2)[];
    expectTypeOf<ArrayLast<T2>>().toEqualTypeOf<Type1 | Type2>();
    expectTypeOf<ArrayLast<Readonly<T2>>>().toEqualTypeOf<Type1 | Type2>();
  });

  it("should be `never` if `T` is `[]`", () => {
    type T = [];
    expectTypeOf<ArrayLast<T>>().toBeNever();
    expectTypeOf<ArrayLast<Readonly<T>>>().toBeNever();
  });

  it("should be `never` if `T` is `never`", () => {
    expectTypeOf<ArrayLast<never>>().toBeNever();
  });

  it("should be `unknown` if `T` is `any`", () => {
    expectTypeOf<ArrayLast<Any>>().toBeUnknown();
  });
});
