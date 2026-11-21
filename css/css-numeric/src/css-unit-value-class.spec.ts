import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssUnitValue } from "./css-unit-value";
import type { CssUnitValueClass } from "./css-unit-value-class";

describe("interface CssUnitValueClass", () => {
  it("should construct an instance of `CssUnitValue`", () => {
    expectTypeOf<CssUnitValueClass>().toBeConstructibleWith(10, "px");
    expectTypeOf<
      InstanceType<CssUnitValueClass>
    >().toEqualTypeOf<CssUnitValue>();
  });
});
