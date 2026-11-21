import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathProduct } from "./css-math-product";
import type { CssMathProductClass } from "./css-math-product-class";

describe("interface CssMathProductClass", () => {
  it("should construct an instance of `CssMathProduct`", () => {
    expectTypeOf<CssMathProductClass>().toBeConstructibleWith(2, 3);
    expectTypeOf<
      InstanceType<CssMathProductClass>
    >().toEqualTypeOf<CssMathProduct>();
  });

  it("should be satisfied by DOM `typeof CSSMathProduct`", () => {
    expectTypeOf<typeof CSSMathProduct>().toExtend<CssMathProductClass>();
  });
});
