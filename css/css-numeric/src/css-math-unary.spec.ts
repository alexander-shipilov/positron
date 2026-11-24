import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathUnary } from "./css-math-unary";
import type { CssMathValue } from "./css-math-value";
import type { CssNumericValue } from "./css-numeric-value";

describe("interface CssMathUnary", () => {
  it("should extend `CssMathValue`", () => {
    expectTypeOf<CssMathUnary>().toExtend<CssMathValue>();
  });

  it("should have readonly `value` property", () => {
    expectTypeOf<CssMathUnary["value"]>().toEqualTypeOf<CssNumericValue>();
  });
});
