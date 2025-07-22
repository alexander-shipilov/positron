import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { EmptyObject } from "./empty-object";

describe("EmptyObject<K>", () => {
  it("should be a `Record<PropertyKey, never>`", () => {
    expectTypeOf<EmptyObject>().toEqualTypeOf<Record<PropertyKey, never>>();
  });

  it("should not match any other values", () => {
    expectTypeOf<Record<PropertyKey, unknown>>().not.toExtend<EmptyObject>();
    expectTypeOf<{ foo: 1 }>().not.toExtend<EmptyObject>();
    expectTypeOf<() => void>().not.toExtend<EmptyObject>();
    expectTypeOf<string>().not.toExtend<EmptyObject>();
  });

  it("should not match nullables", () => {
    expectTypeOf<null>().not.toExtend<EmptyObject>();
    expectTypeOf<undefined>().not.toExtend<EmptyObject>();
  });

  it("should not match either `never` or `unknown`", () => {
    expectTypeOf<never>().not.toExtend<EmptyObject>();
    expectTypeOf<unknown>().not.toExtend<EmptyObject>();
  });
});
