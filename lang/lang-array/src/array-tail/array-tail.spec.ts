import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ArrayTail } from "./array-tail";

describe("ArrayTail<T>", () => {
  type Type0 = string;
  type Type1 = number;
  type Type2 = boolean;

  it("should be `[Type1, ..., TypeN]` if `T` is `[Type0, Type1, ..., TypeN]`", () => {
    type T1 = [Type0, Type1];
    expectTypeOf<ArrayTail<T1>>().toEqualTypeOf<[Type1]>();
    expectTypeOf<ArrayTail<Readonly<T1>>>().toEqualTypeOf<readonly [Type1]>();

    type T2 = [Type0, Type1, Type2];
    expectTypeOf<ArrayTail<T2>>().toEqualTypeOf<[Type1, Type2]>();
    expectTypeOf<ArrayTail<Readonly<T2>>>().toEqualTypeOf<
      readonly [Type1, Type2]
    >();
  });

  it("should be `T` if `T` is `Type[]`", () => {
    type T1 = Type0[];
    expectTypeOf<ArrayTail<T1>>().toEqualTypeOf<T1>();
    expectTypeOf<ArrayTail<Readonly<T1>>>().toEqualTypeOf<Readonly<T1>>();
  });

  it("should be `T` if T is `[...Type0[], Type1, ...,]`", () => {
    type T1 = [...Type0[], Type1];
    expectTypeOf<ArrayTail<T1>>().toEqualTypeOf<T1>();
    expectTypeOf<ArrayTail<Readonly<T1>>>().toEqualTypeOf<Readonly<T1>>();

    type T2 = [...Type0[], Type1, Type2];
    expectTypeOf<ArrayTail<T2>>().toEqualTypeOf<T2>();
    expectTypeOf<ArrayTail<Readonly<T2>>>().toEqualTypeOf<Readonly<T2>>();
  });

  it("should be `never[]` if `T` is `[]`", () => {
    expectTypeOf<ArrayTail<[]>>().toEqualTypeOf<never[]>();
  });
});
