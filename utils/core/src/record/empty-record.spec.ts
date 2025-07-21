import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { EmptyRecord } from "./empty-record";

describe("EmptyObject<K>", () => {
  it("should be a `Record<PropertyKey, never>`", () => {
    expectTypeOf<EmptyRecord>().toEqualTypeOf<Record<PropertyKey, never>>();
  });

  it("should not match any other values", () => {
    expectTypeOf<Record<PropertyKey, unknown>>().not.toExtend<EmptyRecord>();
    expectTypeOf<{ foo: 1 }>().not.toExtend<EmptyRecord>();
    expectTypeOf<() => void>().not.toExtend<EmptyRecord>();
    expectTypeOf<string>().not.toExtend<EmptyRecord>();
  });

  it("should not match nullables", () => {
    expectTypeOf<null>().not.toExtend<EmptyRecord>();
    expectTypeOf<undefined>().not.toExtend<EmptyRecord>();
  });

  it("should not match either `never` or `unknown`", () => {
    expectTypeOf<never>().not.toExtend<EmptyRecord>();
    expectTypeOf<unknown>().not.toExtend<EmptyRecord>();
  });
});
