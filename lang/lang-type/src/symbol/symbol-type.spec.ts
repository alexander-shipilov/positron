import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import { SymbolType } from "./symbol-type";

describe("SymbolType", () => {
  describe("type SymbolType", () => {
    it("should be 'symbol'", () => {
      expectTypeOf<SymbolType>().toEqualTypeOf<"symbol">();
    });
  });

  describe("const SymbolType", () => {
    it("should be the `SymbolType` type`", () => {
      expectTypeOf(SymbolType).toEqualTypeOf<SymbolType>();
    });

    it("should be `typeof <symbol>`", () => {
      expect(typeof Symbol()).toBe(SymbolType);
    });
  });
});
