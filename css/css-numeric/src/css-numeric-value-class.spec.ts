import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssNumericValueClass } from "./css-numeric-value-class";

describe("type CssNumericValueClass", () => {
  it("should be satisfied by DOM `typeof CSSNumericValue`", () => {
    expectTypeOf<typeof CSSNumericValue>().toExtend<CssNumericValueClass>();
  });
});
