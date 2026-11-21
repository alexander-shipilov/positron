import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathMax } from "./css-math-max";
import type { CssMathValue } from "./css-math-value";
import type { CssNumericArray } from "./css-numeric-array";

describe("interface CssMathMax", () => {
  it("should extend `CssMathValue`", () => {
    expectTypeOf<CssMathMax>().toExtend<CssMathValue>();
  });

  it("should have readonly `values` property", () => {
    expectTypeOf<CssMathMax["values"]>().toEqualTypeOf<CssNumericArray>();
  });

  it("should be satisfied by DOM `CSSMathMax`", () => {
    expectTypeOf<CssMathMax>().toExtend<CSSMathMax>();
  });
});
