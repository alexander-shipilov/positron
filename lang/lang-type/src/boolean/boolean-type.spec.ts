import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import { BooleanType } from "./boolean-type";

describe("BooleanType", () => {
  describe("type BooleanType", () => {
    it("should be 'boolean'", () => {
      expectTypeOf<BooleanType>().toEqualTypeOf<"boolean">();
    });
  });

  describe("const BooleanType", () => {
    it("should be the `BooleanType` type`", () => {
      expectTypeOf(BooleanType).toEqualTypeOf<BooleanType>();
    });

    it("should be `typeof <boolean>`", () => {
      expect(typeof false).toBe(BooleanType);
    });
  });
});
