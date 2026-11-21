import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssNumericValue } from "./css-numeric-value";
import type { CssUnitValue } from "./css-unit-value";

describe("interface CssUnitValue", () => {
  it("should extend `CssNumericValue`", () => {
    expectTypeOf<CssUnitValue>().toExtend<CssNumericValue>();
  });

  it("should have `value` and readonly `unit` properties", () => {
    expectTypeOf<CssUnitValue["value"]>().toEqualTypeOf<number>();
    expectTypeOf<CssUnitValue["unit"]>().toEqualTypeOf<string>();

    expectTypeOf<Readonly<CssUnitValue>>().toExtend<CssUnitValue>();
  });

  it("should be satisfied by DOM `CSSUnitValue`", () => {
    expectTypeOf<CssUnitValue>().toExtend<CSSUnitValue>();
  });
});
