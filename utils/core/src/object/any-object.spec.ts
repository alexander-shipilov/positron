import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { AnyObject } from "./any-object";

describe("AnyObject", () => {
  it("should be a `Record<never, never>`", () => {
    expectTypeOf<AnyObject>().toEqualTypeOf<Record<never, never>>();
  });

  it("should match any non-nullable value", () => {
    expectTypeOf<AnyObject>().toExtend<AnyObject>();
    expectTypeOf<Record<PropertyKey, unknown>>().toExtend<AnyObject>();
    expectTypeOf<{ foo: 1 }>().toExtend<AnyObject>();
    expectTypeOf<() => void>().toExtend<AnyObject>();
    expectTypeOf<string>().toExtend<AnyObject>();
  });

  it("should not match nullables", () => {
    expectTypeOf<null>().not.toExtend<AnyObject>();
    expectTypeOf<undefined>().not.toExtend<AnyObject>();
  });

  it("should not match either `never` or `unknown`", () => {
    expectTypeOf<never>().not.toExtend<AnyObject>();
    expectTypeOf<unknown>().not.toExtend<AnyObject>();
  });
});
