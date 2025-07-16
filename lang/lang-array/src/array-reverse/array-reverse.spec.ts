import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ArrayReverse } from "./array-reverse";

describe("ArrayReverse<T>", () => {
  it("should return `T` in the reverse order", () => {
    type T1 = [1, 2];
    expectTypeOf<ArrayReverse<T1>>().toEqualTypeOf<
      [2, 1] //
    >();
    expectTypeOf<ArrayReverse<Readonly<T1>>>().toEqualTypeOf<
      readonly [2, 1] //
    >();

    type T2 = [1, ...2[]];
    expectTypeOf<ArrayReverse<T2>>().toEqualTypeOf<
      [...2[], 1] //
    >();
    expectTypeOf<ArrayReverse<Readonly<T2>>>().toEqualTypeOf<
      readonly [...2[], 1] //
    >();

    type T3 = [...1[], 2];
    expectTypeOf<ArrayReverse<T3>>().toEqualTypeOf<
      [2, ...1[]] //
    >();
    expectTypeOf<ArrayReverse<Readonly<T3>>>().toEqualTypeOf<
      readonly [2, ...1[]] //
    >();

    type T4 = [1, ...2[], 3];
    expectTypeOf<ArrayReverse<T4>>().toEqualTypeOf<
      [3, ...2[], 1] //
    >();
    expectTypeOf<ArrayReverse<Readonly<T4>>>().toEqualTypeOf<
      readonly [3, ...2[], 1] //
    >();

    type T5 = [...1[], 2] | [1, ...2[]];
    expectTypeOf<ArrayReverse<T5>>().toEqualTypeOf<
      | [...2[], 1] //
      | [2, ...1[]]
    >();
    expectTypeOf<ArrayReverse<Readonly<T5>>>().toEqualTypeOf<
      | readonly [...2[], 1] //
      | readonly [2, ...1[]]
    >();
  });

  it("should be `never` if `T` extends `unknown[]`", () => {
    type T = 1[];
    expectTypeOf<ArrayReverse<T>>().toEqualTypeOf<T>();
    expectTypeOf<ArrayReverse<Readonly<T>>>().toEqualTypeOf<Readonly<T>>();
  });

  it("should be `T` if `T` is `[]`", () => {
    type T = [];
    expectTypeOf<ArrayReverse<T>>().toEqualTypeOf<T>();
    expectTypeOf<ArrayReverse<Readonly<T>>>().toEqualTypeOf<Readonly<T>>();
  });

  it("should be `never` if `T` is `never`", () => {
    expectTypeOf<ArrayReverse<never>>().toBeNever();
  });
});
