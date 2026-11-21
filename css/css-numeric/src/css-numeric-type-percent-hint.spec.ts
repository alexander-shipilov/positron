import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssNumericBaseType } from "./css-numeric-base-type";
import type { CssNumericTypePercentHint } from "./css-numeric-type-percent-hint";

describe("type CssNumericTypePercentHint", () => {
  it("should exclude `CssNumericBaseType.percent` from `CssNumericBaseType`", () => {
    expectTypeOf<CssNumericTypePercentHint>().toEqualTypeOf<
      | CssNumericBaseType.angle
      | CssNumericBaseType.flex
      | CssNumericBaseType.frequency
      | CssNumericBaseType.length
      | CssNumericBaseType.resolution
      | CssNumericBaseType.time
    >();
  });

  it("should match DOM `CSSNumericType['percentHint']`", () => {
    expectTypeOf<`${CssNumericTypePercentHint}`>().toEqualTypeOf<
      NonNullable<CSSNumericType["percentHint"]>
    >();
  });
});
