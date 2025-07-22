import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { UnknownObject } from "./unknown-object";

describe("UnknownObject<K>", () => {
  it("should be a `Record<PropertyKey, unknown>`", () => {
    expectTypeOf<UnknownObject>().toEqualTypeOf<Record<PropertyKey, unknown>>();
  });

  it("should match any object", () => {
    expectTypeOf<Record<PropertyKey, unknown>>().toExtend<UnknownObject>();
    expectTypeOf<Record<PropertyKey, string>>().toExtend<UnknownObject>();
    expectTypeOf<{ foo: 1 }>().toExtend<UnknownObject>();
  });

  it("should not match any non-objects", () => {
    expectTypeOf<() => void>().not.toExtend<UnknownObject>();
    expectTypeOf<string>().not.toExtend<UnknownObject>();
  });

  it("should not match nullables", () => {
    expectTypeOf<null>().not.toExtend<UnknownObject>();
    expectTypeOf<undefined>().not.toExtend<UnknownObject>();
  });

  it("should not match either `never` or `unknown`", () => {
    expectTypeOf<never>().not.toExtend<UnknownObject>();
    expectTypeOf<unknown>().not.toExtend<UnknownObject>();
  });
});
