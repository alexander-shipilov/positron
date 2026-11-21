import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssNumericArray } from "./css-numeric-array";
import type { CssNumericArrayCallback } from "./css-numeric-array-callback";
import type { CssNumericValue } from "./css-numeric-value";

describe("type CssNumericArrayCallback", () => {
  it("should accept `(value, index, array)` parameters", () => {
    expectTypeOf<CssNumericArrayCallback>().parameters.toEqualTypeOf<
      [value: CssNumericValue, index: number, array: CssNumericArray]
    >();
    expectTypeOf<CssNumericArrayCallback>().returns.toEqualTypeOf<void>();
  });
});
