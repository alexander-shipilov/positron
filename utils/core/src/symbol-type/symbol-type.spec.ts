import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { SymbolType } from "./symbol-type";
import { SYMBOL_TYPE } from "./symbol-type";

describe("SymbolType", () => {
  it("should be 'symbol'", () => {
    expectTypeOf<SymbolType>().toEqualTypeOf<"symbol">();
  });
});

describe("SYMBOL_TYPE", () => {
  it("should be the `SymbolType` type`", () => {
    expectTypeOf(SYMBOL_TYPE).toEqualTypeOf<SymbolType>();
  });

  it("should be `typeof <symbol>`", () => {
    expect(typeof Symbol()).toBe(SYMBOL_TYPE);
  });
});
