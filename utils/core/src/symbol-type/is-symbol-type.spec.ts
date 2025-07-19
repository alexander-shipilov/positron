import { describe, expect, it } from "@jest/globals";

import { isSymbolType } from "./is-symbol-type";
import { SYMBOL_TYPE } from "./symbol-type";

describe(`${isSymbolType.name}(value)`, () => {
  it("should be return `true` if `value` is a `SymbolType`", () => {
    expect(isSymbolType(SYMBOL_TYPE)).toBe(true);
  });
});
