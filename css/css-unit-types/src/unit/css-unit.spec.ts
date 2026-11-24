import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import { CssUnit } from "./css-unit";

describe("enum CssUnit", () => {
  it("should have lowercase string values matching their enum keys", () => {
    for (const [key, value] of Object.entries(CssUnit)) {
      expect(value).toBe(key.toLowerCase());
    }
  });

  it("should be accepted as `unit` argument in DOM `CSSUnitValue` and `.to()`", () => {
    expectTypeOf<CssUnit>().toExtend<
      ConstructorParameters<typeof CSSUnitValue>[1]
    >();
    expectTypeOf<CssUnit>().toExtend<Parameters<CSSNumericValue["to"]>[0]>();
  });
});
