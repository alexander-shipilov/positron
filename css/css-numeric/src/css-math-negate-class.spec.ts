import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathNegate } from "./css-math-negate";
import type { CssMathNegateClass } from "./css-math-negate-class";

describe("interface CssMathNegateClass", () => {
  it("should construct an instance of `CssMathNegate`", () => {
    expectTypeOf<CssMathNegateClass>().toBeConstructibleWith(1);
    expectTypeOf<
      InstanceType<CssMathNegateClass>
    >().toEqualTypeOf<CssMathNegate>();
  });

  it("should be satisfied by DOM `typeof CSSMathNegate`", () => {
    expectTypeOf<typeof CSSMathNegate>().toExtend<CssMathNegateClass>();
  });
});
