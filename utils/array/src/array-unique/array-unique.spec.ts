import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ArrayUnique } from "./array-unique";

describe("ArrayUnique<T>", () => {
  it(
    "should return unique items of `T`:\n" + //
      " [1, 2, 2]       --> [1, 2]\n" +
      " [number, 1, 2]  --> [number]\n" +
      " [1, number]     --> [1, number]\n" +
      "",
    () => {
      type T1 = [1, 2, 2];
      expectTypeOf<ArrayUnique<T1>>().toEqualTypeOf<[1, 2]>();
      expectTypeOf<ArrayUnique<Readonly<T1>>>().toEqualTypeOf<
        readonly [1, 2]
      >();

      type T2 = [number, 1, 2];
      expectTypeOf<ArrayUnique<T2>>().toEqualTypeOf<[number]>();
      expectTypeOf<ArrayUnique<Readonly<T2>>>().toEqualTypeOf<
        readonly [number]
      >();

      type T3 = [1, number];
      expectTypeOf<ArrayUnique<T3>>().toEqualTypeOf<[1, number]>();
      expectTypeOf<ArrayUnique<Readonly<T3>>>().toEqualTypeOf<
        readonly [1, number]
      >();
    },
  );

  it("should be `T` if `T` has no duplicates", () => {
    type T1 = [1, 2, 3];
    expectTypeOf<ArrayUnique<T1>>().toEqualTypeOf<T1>();
    expectTypeOf<ArrayUnique<Readonly<T1>>>().toEqualTypeOf<Readonly<T1>>();

    type T2 = [];
    expectTypeOf<ArrayUnique<T2>>().toEqualTypeOf<[]>();
    expectTypeOf<ArrayUnique<Readonly<T2>>>().toEqualTypeOf<readonly []>();
  });

  it(
    "should dedupe union types in `T`:\n" +
      " [1, 1 | 2]               -->  [1, 2] | [1]\n" +
      " [1, 2 | 3]               -->  [1, 2] | [1, 3]\n" +
      " [1 | 2, 1]               -->  [1] | [2, 1]\n" +
      " [1 | 2, 2 | 3]           -->  [1, 2] | [1, 3] | [2, 3] | [2]\n" +
      " [number, string | 1, 2]  -->  [number, string] | [number]\n" +
      "",
    () => {
      type T1 = [1, 1 | 2];
      expectTypeOf<ArrayUnique<T1>>().toEqualTypeOf<[1, 2] | [1]>();
      expectTypeOf<ArrayUnique<Readonly<T1>>>().toEqualTypeOf<
        readonly [1, 2] | readonly [1]
      >();

      type T2 = [1, 2 | 3];
      expectTypeOf<ArrayUnique<T2>>().toEqualTypeOf<[1, 2] | [1, 3]>();
      expectTypeOf<ArrayUnique<Readonly<T2>>>().toEqualTypeOf<
        readonly [1, 2] | readonly [1, 3]
      >();

      type T3 = [1 | 2, 1];
      expectTypeOf<ArrayUnique<T3>>().toEqualTypeOf<[1] | [2, 1]>();
      expectTypeOf<ArrayUnique<Readonly<T3>>>().toEqualTypeOf<
        readonly [1] | readonly [2, 1]
      >();

      type T4 = [1 | 2, 2 | 3];
      expectTypeOf<ArrayUnique<T4>>().toEqualTypeOf<
        [1, 2] | [1, 3] | [2, 3] | [2]
      >();
      expectTypeOf<ArrayUnique<Readonly<T4>>>().toEqualTypeOf<
        readonly [1, 2] | readonly [1, 3] | readonly [2, 3] | readonly [2]
      >();

      type T5 = [number, string | 1, 2];
      expectTypeOf<ArrayUnique<T5>>().toEqualTypeOf<
        [number, string] | [number]
      >();
      expectTypeOf<ArrayUnique<Readonly<T5>>>().toEqualTypeOf<
        readonly [number, string] | readonly [number]
      >();
    },
  );

  it(
    "should dedupe `T` if `T` contains a `...rest[]` item:\n" +
      " [...1[]]               -->  [] | [1]`\n" +
      " [...1[], 1]            -->  [1]\n" +
      " [...1[], 2]            -->  [1, 2] | [2]\n" +
      " [...1[], 2, 1]         -->  [1, 2] | [2, 1]\n" +
      " [...(1 | 2)[], 2 | 3]  -->  [1, 2] | [1, 3] | [2, 3] | [2] | [3]\n" +
      " 1 | 2, ...(2 | 3)[]    -->  [1] | [2] | [1, 2] | [1, 3] | [2, 3]\n" +
      "",
    () => {
      type T1 = [...1[]];
      expectTypeOf<ArrayUnique<T1>>().toEqualTypeOf<[] | [1]>();
      expectTypeOf<ArrayUnique<Readonly<T1>>>().toEqualTypeOf<
        readonly [] | readonly [1]
      >();

      type T2 = [...1[], 1];
      expectTypeOf<ArrayUnique<T2>>().toEqualTypeOf<[1]>();
      expectTypeOf<ArrayUnique<Readonly<T2>>>().toEqualTypeOf<readonly [1]>();

      type T3 = [...1[], 2];
      expectTypeOf<ArrayUnique<T3>>().toEqualTypeOf<[1, 2] | [2]>();
      expectTypeOf<ArrayUnique<Readonly<T3>>>().toEqualTypeOf<
        readonly [1, 2] | readonly [2]
      >();

      type T4 = [...1[], 2, 1];
      expectTypeOf<ArrayUnique<T4>>().toEqualTypeOf<[1, 2] | [2, 1]>();
      expectTypeOf<ArrayUnique<Readonly<T4>>>().toEqualTypeOf<
        readonly [1, 2] | readonly [2, 1]
      >();

      type T5 = [...(1 | 2)[], 2 | 3];
      expectTypeOf<ArrayUnique<T5>>().toEqualTypeOf<
        [1, 2] | [1, 3] | [2, 3] | [2] | [3]
      >();
      expectTypeOf<ArrayUnique<Readonly<T5>>>().toEqualTypeOf<
        | readonly [1, 2]
        | readonly [1, 3]
        | readonly [2, 3]
        | readonly [2]
        | readonly [3]
      >();

      type T6 = [1 | 2, ...(2 | 3)[]];
      expectTypeOf<ArrayUnique<T6>>().toEqualTypeOf<
        [1, 2] | [1, 3] | [1] | [2, 3] | [2]
      >();
      expectTypeOf<ArrayUnique<Readonly<T6>>>().toEqualTypeOf<
        | readonly [1, 2]
        | readonly [1, 3]
        | readonly [1]
        | readonly [2, 3]
        | readonly [2]
      >();
    },
  );
});
