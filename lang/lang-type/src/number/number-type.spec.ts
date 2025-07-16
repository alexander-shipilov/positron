import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import { NumberType } from "./number-type";

describe("NumberType", () => {
  describe("type NumberType", () => {
    it("should be 'number'", () => {
      expectTypeOf<NumberType>().toEqualTypeOf<"number">();
    });
  });

  describe("const NumberType", () => {
    it("should be the `NumberType` type`", () => {
      expectTypeOf(NumberType).toEqualTypeOf<NumberType>();
    });

    it("should be `typeof <number>`", () => {
      expect(typeof 1).toBe(NumberType);
    });
  });
});
