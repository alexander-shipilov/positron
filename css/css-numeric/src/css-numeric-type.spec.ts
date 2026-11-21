import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { CssNumericType } from "./css-numeric-type";

describe("interface CssNumericType", () => {
  it("should be mutually assignable with DOM `CSSNumericType`", () => {
    expectTypeOf<CssNumericType>().toExtend<CSSNumericType>();
  });
});
