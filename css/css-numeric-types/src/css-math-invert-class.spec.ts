import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathInvert } from "./css-math-invert";
import type { CssMathInvertClass } from "./css-math-invert-class";

describe("interface CssMathInvertClass", () => {
  it("should construct an instance of `CssMathInvert`", () => {
    expectTypeOf<CssMathInvertClass>().toBeConstructibleWith(2);
    expectTypeOf<
      InstanceType<CssMathInvertClass>
    >().toEqualTypeOf<CssMathInvert>();
  });
});
