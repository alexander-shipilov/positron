import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ArrayType } from "./array-type";

describe("ArrayType<T>", () => {
  it("should be a type of the given array or tuple type", () => {
    type T1 = string;
    type T2 = number;
    expectTypeOf<ArrayType<T1[]>>().toEqualTypeOf<T1>();
    expectTypeOf<ArrayType<readonly T1[]>>().toEqualTypeOf<T1>();

    expectTypeOf<ArrayType<[T1]>>().toEqualTypeOf<T1>();
    expectTypeOf<ArrayType<readonly [T1]>>().toEqualTypeOf<T1>();

    expectTypeOf<ArrayType<[T1, T2]>>().toEqualTypeOf<T1 | T2>();
    expectTypeOf<ArrayType<readonly [T1, T2]>>().toEqualTypeOf<T1 | T2>();

    expectTypeOf<ArrayType<[...T1[]]>>().toEqualTypeOf<T1>();
    expectTypeOf<ArrayType<[...T1[], T2]>>().toEqualTypeOf<T1 | T2>();
    expectTypeOf<ArrayType<[T1, ...T2[]]>>().toEqualTypeOf<T1 | T2>();

    expectTypeOf<ArrayType<(T1 | T2)[]>>().toEqualTypeOf<T1 | T2>();
  });

  it("should be `never` if `T` is `[]`", () => {
    expectTypeOf<ArrayType<[]>>().toBeNever();
  });

  it("should not be `never` if at least one of the arrays in union type is not []", () => {
    expectTypeOf<ArrayType<[] | [1]>>().toEqualTypeOf<1>();
  });
});
