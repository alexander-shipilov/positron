import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ArrayHead } from "./array-head";

describe("ArrayHead<T>", () => {
  type Type0 = string;
  type Type1 = number;
  type Type2 = boolean;

  it("should be `[TypeN, ..., Type1]` if `T` is `[TypeN, ..., Type1, Type0]`", () => {
    type T1 = [Type1, Type0];
    expectTypeOf<ArrayHead<T1>>().toEqualTypeOf<
      [Type1] //
    >();
    expectTypeOf<ArrayHead<Readonly<T1>>>().toEqualTypeOf<
      readonly [Type1] //
    >();

    type T2 = [Type2, Type1, Type0];
    expectTypeOf<ArrayHead<T2>>().toEqualTypeOf<
      [Type2, Type1] //
    >();
    expectTypeOf<ArrayHead<Readonly<T2>>>().toEqualTypeOf<
      readonly [Type2, Type1] //
    >();
  });

  it("should be `T` if `T` is `Type[]`", () => {
    type T1 = Type0[];
    expectTypeOf<ArrayHead<T1>>().toEqualTypeOf<T1>();
    expectTypeOf<ArrayHead<Readonly<T1>>>().toEqualTypeOf<Readonly<T1>>();
  });

  it("should be `T` if T is `[..., Type1, ...Type0[]]`", () => {
    type T1 = [Type1, ...Type0[]];
    expectTypeOf<ArrayHead<T1>>().toEqualTypeOf<T1>();
    expectTypeOf<ArrayHead<Readonly<T1>>>().toEqualTypeOf<Readonly<T1>>();

    type T2 = [Type2, Type1, ...Type0[]];
    expectTypeOf<ArrayHead<T2>>().toEqualTypeOf<T2>();
    expectTypeOf<ArrayHead<Readonly<T2>>>().toEqualTypeOf<Readonly<T2>>();
  });

  it("should be `never[]` if `T` is `[]`", () => {
    expectTypeOf<ArrayHead<[]>>().toEqualTypeOf<never[]>();
  });
});
