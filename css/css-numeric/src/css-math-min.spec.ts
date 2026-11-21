import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathMin } from "./css-math-min";
import type { CssMathValue } from "./css-math-value";
import type { CssNumericArray } from "./css-numeric-array";

describe("interface CssMathMin", () => {
  it("should extend `CssMathValue`", () => {
    expectTypeOf<CssMathMin>().toExtend<CssMathValue>();
  });

  it("should have readonly `values` property", () => {
    expectTypeOf<CssMathMin["values"]>().toEqualTypeOf<CssNumericArray>();
  });

  it("should be satisfied by DOM `CSSMathMin`", () => {
    expectTypeOf<CSSMathMin>().toExtend<CssMathMin>();
  });
});
