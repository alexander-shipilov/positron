import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import { BigintType } from "./bigint-type";

describe("BigintType", () => {
  describe("type BigintType", () => {
    it("should be 'bigint'", () => {
      expectTypeOf<BigintType>().toEqualTypeOf<"bigint">();
    });
  });

  describe("const BigintType", () => {
    it("should be the `BigintType` type`", () => {
      expectTypeOf(BigintType).toEqualTypeOf<BigintType>();
    });

    it("should be `typeof <bigint>`", () => {
      expect(typeof 1n).toBe(BigintType);
    });
  });
});
