import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathValue } from "./css-math-value";
import type { CssMathVariadic } from "./css-math-variadic";
import type { CssNumericArray } from "./css-numeric-array";

describe("interface CssMathVariadic", () => {
  it("should extend `CssMathValue`", () => {
    expectTypeOf<CssMathVariadic>().toExtend<CssMathValue>();
  });

  it("should have readonly `values` property", () => {
    expectTypeOf<CssMathVariadic["values"]>().toEqualTypeOf<CssNumericArray>();
  });
});
