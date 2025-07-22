import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { AnyFunction } from "./any-function";

describe("AnyFunction", () => {
  it("should be a `(...args: never[]) => `T`", () => {
    type T1 = AnyFunction<string>;
    expectTypeOf<T1>().toEqualTypeOf<(...args: never[]) => string>();
  });

  it("should be a `(...args: never[]) => unknown` if `T` omitted", () => {
    expectTypeOf<AnyFunction>().toEqualTypeOf<(...args: never[]) => unknown>();
  });

  it("should match any function that returns `T`", () => {
    expectTypeOf<() => void>().toExtend<AnyFunction>();
    expectTypeOf<(arg: number) => void>().toExtend<AnyFunction>();
    expectTypeOf<(...args: number[]) => void>().toExtend<AnyFunction>();

    expectTypeOf<() => string>().toExtend<AnyFunction>();
    expectTypeOf<(arg: number) => string>().toExtend<AnyFunction>();
    expectTypeOf<(...args: number[]) => string>().toExtend<AnyFunction>();

    expectTypeOf<() => never>().toExtend<AnyFunction>();
    expectTypeOf<(arg: number) => never>().toExtend<AnyFunction>();
    expectTypeOf<(...args: number[]) => never>().toExtend<AnyFunction>();
  });
});
