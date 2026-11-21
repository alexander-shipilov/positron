import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathNegate } from "./css-math-negate";
import type { CssMathValue } from "./css-math-value";
import type { CssNumericValue } from "./css-numeric-value";

describe("interface CssMathNegate", () => {
  it("should extend `CssMathValue`", () => {
    expectTypeOf<CssMathNegate>().toExtend<CssMathValue>();
  });

  it("should have readonly `value` property", () => {
    expectTypeOf<CssMathNegate["value"]>().toEqualTypeOf<CssNumericValue>();
  });

  it("should be satisfied by DOM `CSSMathNegate`", () => {
    expectTypeOf<CssMathNegate>().toExtend<CSSMathNegate>();
  });
});
