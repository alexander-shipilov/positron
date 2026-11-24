import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssNumericValue } from "./css-numeric-value";
import type { CssNumericValueClass } from "./css-numeric-value-class";

describe("type CssNumericValueClass", () => {
  it("should describe an abstract constructor for `CssNumericValue`", () => {
    expectTypeOf<
      InstanceType<CssNumericValueClass>
    >().toEqualTypeOf<CssNumericValue>();
  });
});
