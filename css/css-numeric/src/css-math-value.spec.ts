import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathOperator } from "./css-math-operator";
import type { CssMathValue } from "./css-math-value";
import type { CssNumericValue } from "./css-numeric-value";

describe("interface CssMathValue", () => {
  it("should extend `CssNumericValue`", () => {
    expectTypeOf<CssMathValue>().toExtend<CssNumericValue>();
  });

  it("should have readonly `operator` property", () => {
    expectTypeOf<CssMathValue["operator"]>().toEqualTypeOf<CssMathOperator>();
  });

  it("should be satisfied by DOM `CSSMathValue`", () => {
    expectTypeOf<CSSMathValue>().toExtend<CssMathValue>();
  });
});
