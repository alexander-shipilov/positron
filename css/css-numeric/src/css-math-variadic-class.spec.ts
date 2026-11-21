import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathVariadic } from "./css-math-variadic";
import type { CssMathVariadicClass } from "./css-math-variadic-class";
import type { CssNumberish } from "./css-numberish";

describe("type CssMathVariadicClass", () => {
  it("should describe an abstract constructor for `CssMathVariadic`", () => {
    expectTypeOf<ConstructorParameters<CssMathVariadicClass>>().toEqualTypeOf<
      CssNumberish[]
    >();
    expectTypeOf<
      InstanceType<CssMathVariadicClass>
    >().toEqualTypeOf<CssMathVariadic>();
  });
});
