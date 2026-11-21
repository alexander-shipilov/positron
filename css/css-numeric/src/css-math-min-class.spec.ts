import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathMin } from "./css-math-min";
import type { CssMathMinClass } from "./css-math-min-class";

describe("interface CssMathMinClass", () => {
  it("should construct an instance of `CssMathMin`", () => {
    expectTypeOf<CssMathMinClass>().toBeConstructibleWith(1, 1);
    expectTypeOf<InstanceType<CssMathMinClass>>().toEqualTypeOf<CssMathMin>();
  });
});
