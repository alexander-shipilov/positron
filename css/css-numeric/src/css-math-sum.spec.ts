import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathSum } from "./css-math-sum";
import type { CssMathValue } from "./css-math-value";
import type { CssNumericArray } from "./css-numeric-array";

describe("interface CssMathSum", () => {
  it("should extend `CssMathValue`", () => {
    expectTypeOf<CssMathSum>().toExtend<CssMathValue>();
  });

  it("should have readonly `values` property", () => {
    expectTypeOf<CssMathSum["values"]>().toEqualTypeOf<CssNumericArray>();
  });

  it("should be satisfied by DOM `CSSMathSum`", () => {
    expectTypeOf<CssMathSum>().toExtend<CSSMathSum>();
  });
});
