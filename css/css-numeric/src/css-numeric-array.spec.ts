import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssNumericArray } from "./css-numeric-array";
import type { CssNumericValue } from "./css-numeric-value";

describe("interface CssNumericArray", () => {
  it("should be an iterable indexed collection of `CssNumericValue`", () => {
    expectTypeOf<CssNumericArray>().toExtend<Iterable<CssNumericValue>>();
    expectTypeOf<CssNumericArray[number]>().toEqualTypeOf<CssNumericValue>();
    expectTypeOf<CssNumericArray["length"]>().toEqualTypeOf<number>();
  });

  it("should be satisfied by DOM `CSSNumericArray`", () => {
    expectTypeOf<CssNumericArray>().toExtend<CSSNumericArray>();
  });
});
