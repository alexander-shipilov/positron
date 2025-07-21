import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { UnknownRecord } from "./unknown-record";

describe("UnknownRecord<K>", () => {
  it("should be a `Record<PropertyKey, unknown>`", () => {
    expectTypeOf<UnknownRecord>().toEqualTypeOf<Record<PropertyKey, unknown>>();
  });

  it("should match any object", () => {
    expectTypeOf<Record<PropertyKey, unknown>>().toExtend<UnknownRecord>();
    expectTypeOf<Record<PropertyKey, string>>().toExtend<UnknownRecord>();
    expectTypeOf<{ foo: 1 }>().toExtend<UnknownRecord>();
  });

  it("should not match any non-objects", () => {
    expectTypeOf<() => void>().not.toExtend<UnknownRecord>();
    expectTypeOf<string>().not.toExtend<UnknownRecord>();
  });

  it("should not match nullables", () => {
    expectTypeOf<null>().not.toExtend<UnknownRecord>();
    expectTypeOf<undefined>().not.toExtend<UnknownRecord>();
  });

  it("should not match either `never` or `unknown`", () => {
    expectTypeOf<never>().not.toExtend<UnknownRecord>();
    expectTypeOf<unknown>().not.toExtend<UnknownRecord>();
  });
});
