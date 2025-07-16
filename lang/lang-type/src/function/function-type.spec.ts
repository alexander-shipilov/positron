import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import { FunctionType } from "./function-type";

describe("FunctionType", () => {
  describe("type FunctionType", () => {
    it("should be 'function'", () => {
      expectTypeOf<FunctionType>().toEqualTypeOf<"function">();
    });
  });

  describe("const FunctionType", () => {
    it("should be the `FunctionType` type`", () => {
      expectTypeOf(FunctionType).toEqualTypeOf<FunctionType>();
    });

    it("should be `typeof <function>`", () => {
      expect(typeof (() => void 0)).toBe(FunctionType);
    });
  });
});
