import { describe, expect, it } from "@jest/globals";

import { isSymbolType } from "./is-symbol-type";
import { SymbolType } from "./symbol-type";

describe(`${isSymbolType.name}(value)`, () => {
  it("should be return `true` if `value` is `SymbolType`", () => {
    expect(isSymbolType(SymbolType)).toBe(true);
  });
});
