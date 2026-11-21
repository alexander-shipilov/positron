import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathProduct } from "./css-math-product";
import type { CssMathValue } from "./css-math-value";
import type { CssNumericArray } from "./css-numeric-array";

describe("interface CssMathProduct", () => {
  it("should extend `CssMathValue`", () => {
    expectTypeOf<CssMathProduct>().toExtend<CssMathValue>();
  });

  it("should have readonly `values` property", () => {
    expectTypeOf<CssMathProduct["values"]>().toEqualTypeOf<CssNumericArray>();
  });

  it("should satisfy DOM `CSSMathProduct`", () => {
    expectTypeOf<CssMathProduct>().toExtend<CSSMathProduct>();
  });
});
