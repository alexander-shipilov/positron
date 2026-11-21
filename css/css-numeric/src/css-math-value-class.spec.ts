import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathValue } from "./css-math-value";
import type { CssMathValueClass } from "./css-math-value-class";

describe("type CssMathValueClass", () => {
  it("should describe an abstract constructor for `CssMathValue`", () => {
    expectTypeOf<
      InstanceType<CssMathValueClass>
    >().toEqualTypeOf<CssMathValue>();
  });
});
