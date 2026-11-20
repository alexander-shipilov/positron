import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Reference } from "./reference";

describe("type Reference", () => {
  it("should be `object`", () => {
    expectTypeOf<Reference>().toEqualTypeOf<object>();
  });

  it("should match `Record`", () => {
    expectTypeOf<Record<PropertyKey, unknown>>().toExtend<Reference>();
  });

  it("should match functions", () => {
    expectTypeOf<() => void>().toExtend<Reference>();
    expectTypeOf<(arg: number) => void>().toExtend<Reference>();
    expectTypeOf<(...args: unknown[]) => void>().toExtend<Reference>();
    expectTypeOf<() => unknown>().toExtend<Reference>();
    expectTypeOf<(arg: number) => unknown>().toExtend<Reference>();
    expectTypeOf<(...args: unknown[]) => unknown>().toExtend<Reference>();
    expectTypeOf<new (...args: unknown[]) => unknown>().toExtend<Reference>();
  });

  it("should match constructors", () => {
    expectTypeOf<new () => unknown>().toExtend<Reference>();
    expectTypeOf<new (arg: unknown) => unknown>().toExtend<Reference>();
    expectTypeOf<new (...args: unknown[]) => unknown>().toExtend<Reference>();
  });

  it("should not match primitives", () => {
    expectTypeOf<bigint>().not.toExtend<Reference>();
    expectTypeOf<boolean>().not.toExtend<Reference>();
    expectTypeOf<null>().not.toExtend<Reference>();
    expectTypeOf<number>().not.toExtend<Reference>();
    expectTypeOf<string>().not.toExtend<Reference>();
    expectTypeOf<symbol>().not.toExtend<Reference>();
    expectTypeOf<undefined>().not.toExtend<Reference>();
  });
});
