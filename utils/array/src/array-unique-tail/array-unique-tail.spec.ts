import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ArrayUniqueTail } from "./array-unique-tail";

describe("ArrayUniqueTail<T>", () => {
  it("should return unique items of `T`", () => {
    type T1 = [3, 1, 3];
    expectTypeOf<ArrayUniqueTail<T1>>().toEqualTypeOf<[1, 3]>();
    expectTypeOf<ArrayUniqueTail<Readonly<T1>>>().toEqualTypeOf<
      readonly [1, 3]
    >();

    type T2 = [number, 1, 2];
    expectTypeOf<ArrayUniqueTail<T2>>().toEqualTypeOf<[number, 1, 2]>();
    expectTypeOf<ArrayUniqueTail<Readonly<T2>>>().toEqualTypeOf<
      readonly [number, 1, 2]
    >();
  });

  it("should be `T` if `T` has no duplicates", () => {
    type T1 = [1, 2, 3];
    expectTypeOf<ArrayUniqueTail<T1>>().toEqualTypeOf<T1>();
    expectTypeOf<ArrayUniqueTail<Readonly<T1>>>().toEqualTypeOf<Readonly<T1>>();

    type T2 = [];
    expectTypeOf<ArrayUniqueTail<T2>>().toEqualTypeOf<[]>();
    expectTypeOf<ArrayUniqueTail<Readonly<T2>>>().toEqualTypeOf<readonly []>();
  });

  it(
    "should dedupe union types in `T`:\n" +
      "[1, 1 | 2]               -->  [1, 2] | [1] \n" +
      "[1, 2 | 3]               -->  [1, 2] | [1, 3] \n" +
      "[1 | 2, 1]               -->  [1] | [2, 1] \n" +
      "[1 | 2, 2 | 3]           -->  [1, 2] | [1, 3] | [2, 3] | [2] \n" +
      "[number, string | 1, 2]  -->  [number, 1, 2] | [number, string, 2]",
    () => {
      type T1 = [1, 1 | 2];
      expectTypeOf<ArrayUniqueTail<T1>>().toEqualTypeOf<[1, 2] | [1]>();
      expectTypeOf<ArrayUniqueTail<Readonly<T1>>>().toEqualTypeOf<
        readonly [1, 2] | readonly [1]
      >();

      type T2 = [1, 2 | 3];
      expectTypeOf<ArrayUniqueTail<T2>>().toEqualTypeOf<[1, 2] | [1, 3]>();
      expectTypeOf<ArrayUniqueTail<Readonly<T2>>>().toEqualTypeOf<
        readonly [1, 2] | readonly [1, 3]
      >();

      type T3 = [1 | 2, 1];
      expectTypeOf<ArrayUniqueTail<T3>>().toEqualTypeOf<[1] | [2, 1]>();
      expectTypeOf<ArrayUniqueTail<Readonly<T3>>>().toEqualTypeOf<
        readonly [1] | readonly [2, 1]
      >();

      type T4 = [1 | 2, 2 | 3];
      expectTypeOf<ArrayUniqueTail<T4>>().toEqualTypeOf<
        [1, 2] | [1, 3] | [2, 3] | [2]
      >();
      expectTypeOf<ArrayUniqueTail<Readonly<T4>>>().toEqualTypeOf<
        readonly [1, 2] | readonly [1, 3] | readonly [2, 3] | readonly [2]
      >();

      type T5 = [number, string | 1, 2];
      expectTypeOf<ArrayUniqueTail<T5>>().toEqualTypeOf<
        [number, 1, 2] | [number, string, 2]
      >();
      expectTypeOf<ArrayUniqueTail<Readonly<T5>>>().toEqualTypeOf<
        readonly [number, 1, 2] | readonly [number, string, 2]
      >();
    },
  );

  it(
    "should dedupe `T` if `T` contains a `...rest[]` item:\n" +
      "[...1[]]               -->  [] | [1]` \n" +
      "[...1[], 1]            -->  [1] \n" +
      "[...1[], 2]            -->  [1, 2] | [2] \n" +
      "[...1[], 2, 1]         -->  [2, 1] \n" +
      "[...(1 | 2)[], 2 | 3]  -->  [1, 2] | [1, 3] | [2, 3] | [2] | [3] \n" +
      "1 | 2, ...(2 | 3)[]    -->  [1] | [2] | [1, 2] | [1, 3] | [2, 3]",
    () => {
      type T1 = [...1[]];
      expectTypeOf<ArrayUniqueTail<T1>>().toEqualTypeOf<[] | [1]>();
      expectTypeOf<ArrayUniqueTail<Readonly<T1>>>().toEqualTypeOf<
        readonly [] | readonly [1]
      >();

      type T2 = [...1[], 1];
      expectTypeOf<ArrayUniqueTail<T2>>().toEqualTypeOf<[1]>();
      expectTypeOf<ArrayUniqueTail<Readonly<T2>>>().toEqualTypeOf<
        readonly [1]
      >();

      type T3 = [...1[], 2];
      expectTypeOf<ArrayUniqueTail<T3>>().toEqualTypeOf<[1, 2] | [2]>();
      expectTypeOf<ArrayUniqueTail<Readonly<T3>>>().toEqualTypeOf<
        readonly [1, 2] | readonly [2]
      >();

      type T4 = [...1[], 2, 1];
      expectTypeOf<ArrayUniqueTail<T4>>().toEqualTypeOf<[2, 1]>();
      expectTypeOf<ArrayUniqueTail<Readonly<T4>>>().toEqualTypeOf<
        readonly [2, 1]
      >();

      type T5 = [...(1 | 2)[], 2 | 3];
      expectTypeOf<ArrayUniqueTail<T5>>().toEqualTypeOf<
        [1, 2] | [1, 3] | [2, 3] | [2] | [3]
      >();
      expectTypeOf<ArrayUniqueTail<Readonly<T5>>>().toEqualTypeOf<
        | readonly [1, 2]
        | readonly [1, 3]
        | readonly [2, 3]
        | readonly [2]
        | readonly [3]
      >();

      type T6 = [1 | 2, ...(2 | 3)[]];
      expectTypeOf<ArrayUniqueTail<T6>>().toEqualTypeOf<
        [1, 2] | [1, 3] | [1] | [2, 3] | [2]
      >();
      expectTypeOf<ArrayUniqueTail<Readonly<T6>>>().toEqualTypeOf<
        | readonly [1, 2]
        | readonly [1, 3]
        | readonly [1]
        | readonly [2, 3]
        | readonly [2]
      >();
    },
  );
});
