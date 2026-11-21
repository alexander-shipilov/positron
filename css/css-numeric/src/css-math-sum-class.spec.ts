import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathSum } from "./css-math-sum";
import type { CssMathSumClass } from "./css-math-sum-class";

describe("interface CssMathSumClass", () => {
  it("should construct an instance of `CssMathSum`", () => {
    expectTypeOf<CssMathSumClass>().toBeConstructibleWith(1, 2);
    expectTypeOf<InstanceType<CssMathSumClass>>().toEqualTypeOf<CssMathSum>();
  });

  it("should be satisfied by DOM `typeof CSSMathSum`", () => {
    expectTypeOf<typeof CSSMathSum>().toExtend<CssMathSumClass>();
  });
});
