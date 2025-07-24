import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { SymbolType } from "./symbol-type";
import { SYMBOL_TYPE } from "./symbol-type";

describe("SYMBOL_TYPE", () => {
  it("should be `typeof <symbol>`", () => {
    expect(typeof Symbol()).toBe(SYMBOL_TYPE);
  });
});

describe("SymbolType", () => {
  it("should be `typeof SYMBOL_TYPE`", () => {
    expectTypeOf<SymbolType>().toEqualTypeOf<typeof SYMBOL_TYPE>();
  });
});
