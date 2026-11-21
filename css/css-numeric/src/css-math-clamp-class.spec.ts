import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathClamp } from "./css-math-clamp";
import type { CssMathClampClass } from "./css-math-clamp-class";

describe("interface CssMathClampClass", () => {
  it("should construct an instance of `CssMathClamp`", () => {
    expectTypeOf<CssMathClampClass>().toBeConstructibleWith(1, 2, 3);
    expectTypeOf<
      InstanceType<CssMathClampClass>
    >().toEqualTypeOf<CssMathClamp>();
  });

  it("should be satisfied by DOM `typeof CSSMathClamp`", () => {
    expectTypeOf<typeof CSSMathClamp>().toExtend<CssMathClampClass>();
  });
});
