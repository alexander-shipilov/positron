import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssNumberish } from "./css-numberish";
import type { CssNumericValue } from "./css-numeric-value";

describe("type CssNumberish", () => {
  it("should accept `number` and `CssNumericValue`", () => {
    expectTypeOf<number>().toExtend<CssNumberish>();
    expectTypeOf<CssNumericValue>().toExtend<CssNumberish>();
  });

  it("should be satisfied by DOM `CSSNumberish`", () => {
    expectTypeOf<CSSNumberish>().toExtend<CssNumberish>();
  });
});
