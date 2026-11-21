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
    expectTypeOf<CssUnit>().toExtend<
      Parameters<CSSNumericValue["to"]>[0]
    >();
  });

  it("should align with DOM `CSS` factory method names", () => {
    type DomCssFactoryUnits = {
      [K in keyof typeof CSS]: (typeof CSS)[K] extends (
        value: number,
      ) => CSSUnitValue
        ? Lowercase<K & string>
        : never;
    }[keyof typeof CSS];

    expectTypeOf<DomCssFactoryUnits>().toExtend<`${CssUnit}`>();
  });
});
