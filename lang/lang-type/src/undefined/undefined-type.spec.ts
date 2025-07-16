import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import { UndefinedType } from "./undefined-type";

describe("UndefinedType", () => {
  describe("type UndefinedType", () => {
    it("should be 'undefined'", () => {
      expectTypeOf<UndefinedType>().toEqualTypeOf<"undefined">();
    });
  });

  describe("const UndefinedType", () => {
    it("should be the `UndefinedType` type`", () => {
      expectTypeOf(UndefinedType).toEqualTypeOf<UndefinedType>();
    });

    it("should be `typeof undefined`", () => {
      expect(typeof undefined).toBe(UndefinedType);
    });
  });
});
