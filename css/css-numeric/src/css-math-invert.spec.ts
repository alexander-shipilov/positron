import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathInvert } from "./css-math-invert";
import type { CssMathValue } from "./css-math-value";
import type { CssNumericValue } from "./css-numeric-value";

describe("interface CssMathInvert", () => {
  it("should extend `CssMathValue`", () => {
    expectTypeOf<CssMathInvert>().toExtend<CssMathValue>();
  });

  it("should have readonly `value` property", () => {
    expectTypeOf<CssMathInvert["value"]>().toEqualTypeOf<CssNumericValue>();
  });

  it("should be satisfied by DOM `CSSMathInvert`", () => {
    expectTypeOf<CSSMathInvert>().toExtend<CssMathInvert>();
  });
});
