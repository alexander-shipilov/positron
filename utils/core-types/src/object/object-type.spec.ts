import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import { ObjectType } from "./object-type";

describe("ObjectType", () => {
  describe("type ObjectType", () => {
    it("should be 'object'", () => {
      expectTypeOf<ObjectType>().toEqualTypeOf<"object">();
    });
  });

  describe("const ObjectType", () => {
    it("should be the `ObjectType` type`", () => {
      expectTypeOf(ObjectType).toEqualTypeOf<ObjectType>();
    });

    it("should be `typeof <object>`", () => {
      expect(typeof {}).toBe(ObjectType);
    });
  });
});
