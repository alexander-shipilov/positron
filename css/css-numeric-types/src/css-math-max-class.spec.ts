import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssMathMax } from "./css-math-max";
import type { CssMathMaxClass } from "./css-math-max-class";

describe("interface CssMathMaxClass", () => {
  it("should construct an instance of `CssMathMax`", () => {
    expectTypeOf<CssMathMaxClass>().toBeConstructibleWith(1, 2);
    expectTypeOf<InstanceType<CssMathMaxClass>>().toEqualTypeOf<CssMathMax>();
  });
});
