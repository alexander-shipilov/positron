import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathUnary } from "./css-math-unary";
import type { CssMathUnaryClass } from "./css-math-unary-class";
import type { CssNumberish } from "./css-numberish";

describe("type CssMathUnaryClass", () => {
  it("should describe an abstract constructor for `CssMathUnary`", () => {
    expectTypeOf<ConstructorParameters<CssMathUnaryClass>>().toEqualTypeOf<
      [arg: CssNumberish]
    >();
    expectTypeOf<
      InstanceType<CssMathUnaryClass>
    >().toEqualTypeOf<CssMathUnary>();
  });
});
