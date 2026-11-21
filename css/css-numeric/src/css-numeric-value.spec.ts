import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssNumericValue } from "./css-numeric-value";

describe("interface CssNumericValue", () => {
  it("should be satisfied by DOM `CSSNumericValue`", () => {
    expectTypeOf<CssNumericValue>().toExtend<CSSNumericValue>();
  });
});
