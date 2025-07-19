import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ObjectType } from "./object-type";
import { OBJECT_TYPE } from "./object-type";

describe("ObjectType", () => {
  it("should be 'object'", () => {
    expectTypeOf<ObjectType>().toEqualTypeOf<"object">();
  });
});

describe("OBJECT_TYPE", () => {
  it("should be the `ObjectType` type`", () => {
    expectTypeOf(OBJECT_TYPE).toEqualTypeOf<ObjectType>();
  });

  it("should be `typeof <object>`", () => {
    expect(typeof {}).toBe(OBJECT_TYPE);
  });
});
