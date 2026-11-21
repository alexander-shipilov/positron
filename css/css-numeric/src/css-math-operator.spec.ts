import { describe, expect, it } from "@jest/globals";

import { CssMathOperator } from "./css-math-operator";

describe("enum CssMathOperator", () => {
  it("should contain all CSS Typed OM math operators", () => {
    expect(Object.values(CssMathOperator)).toEqual([
      "clamp",
      "invert",
      "max",
      "min",
      "negate",
      "product",
      "sum",
    ]);
  });
});
