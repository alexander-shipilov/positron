import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathClamp } from "./css-math-clamp";
import type { CssMathValue } from "./css-math-value";
import type { CssNumericValue } from "./css-numeric-value";

describe("interface CssMathClamp", () => {
  it("should extend `CssMathValue`", () => {
    expectTypeOf<CssMathClamp>().toExtend<CssMathValue>();
  });

  it("should have readonly `lower`, `value`, and `upper` properties", () => {
    expectTypeOf<CssMathClamp["lower"]>().toEqualTypeOf<CssNumericValue>();
    expectTypeOf<CssMathClamp["value"]>().toEqualTypeOf<CssNumericValue>();
    expectTypeOf<CssMathClamp["upper"]>().toEqualTypeOf<CssNumericValue>();
  });

  it("should be satisfied by DOM `CSSMathClamp`", () => {
    expectTypeOf<CSSMathClamp>().toExtend<CssMathClamp>();
  });
});
