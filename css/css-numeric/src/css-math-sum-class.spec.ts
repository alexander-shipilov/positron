import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathSum } from "./css-math-sum";
import type { CssMathSumClass } from "./css-math-sum-class";

describe("interface CssMathSumClass", () => {
  it("should construct an instance of `CssMathSum`", () => {
    expectTypeOf<CssMathSumClass>().toBeConstructibleWith(2, 3);
    expectTypeOf<InstanceType<CssMathSumClass>>().toEqualTypeOf<CssMathSum>();
  });
});
