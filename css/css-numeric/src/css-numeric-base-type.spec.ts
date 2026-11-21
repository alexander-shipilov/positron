import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import { CssNumericBaseType } from "./css-numeric-base-type";

describe("enum CssNumericBaseType", () => {
  it("should contain all CSS Typed OM base types", () => {
    expect(Object.values(CssNumericBaseType)).toEqual([
      "angle",
      "flex",
      "frequency",
      "length",
      "percent",
      "resolution",
      "time",
    ]);
  });

  it("should match DOM `CSSNumericBaseType`", () => {
    expectTypeOf<`${CssNumericBaseType}`>().toEqualTypeOf<CSSNumericBaseType>();
  });
});
