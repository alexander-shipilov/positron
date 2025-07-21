import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ArrayToTuple } from "./array-to-tuple";

describe("ArrayToTuple<T>", () => {
  it(
    "should remove non-fixed-length sequences from `T`:\n" + //
      " [1, 2, ...3[]]  --> [1, 2]\n" +
      " [...1[], 2, 3]  --> [2, 3]\n" +
      " [1, ...2[], 3]  --> [1, 3]\n" +
      " 1[]             --> []\n" +
      "",
    () => {
      type T1 = [1, 2, ...3[]];
      expectTypeOf<ArrayToTuple<T1>>().toEqualTypeOf<[1, 2]>();
      expectTypeOf<ArrayToTuple<Readonly<T1>>>().toEqualTypeOf<
        readonly [1, 2]
      >();

      type T2 = [...1[], 2, 3];
      expectTypeOf<ArrayToTuple<T2>>().toEqualTypeOf<[2, 3]>();
      expectTypeOf<ArrayToTuple<Readonly<T2>>>().toEqualTypeOf<
        readonly [2, 3]
      >();

      type T3 = [1, ...2[], 3];
      expectTypeOf<ArrayToTuple<T3>>().toEqualTypeOf<[1, 3]>();
      expectTypeOf<ArrayToTuple<Readonly<T3>>>().toEqualTypeOf<
        readonly [1, 3]
      >();

      type T4 = 1[];
      expectTypeOf<ArrayToTuple<T4>>().toEqualTypeOf<[]>();
      expectTypeOf<ArrayToTuple<Readonly<T4>>>().toEqualTypeOf<readonly []>();
    },
  );
});
