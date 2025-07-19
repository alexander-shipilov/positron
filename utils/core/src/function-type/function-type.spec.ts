import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { FunctionType } from "./function-type";
import { FUNCTION_TYPE } from "./function-type";

describe("FunctionType", () => {
  it("should be 'function'", () => {
    expectTypeOf<FunctionType>().toEqualTypeOf<"function">();
  });
});

describe("FUNCTION_TYPE", () => {
  it("should be the `FunctionType` type`", () => {
    expectTypeOf(FUNCTION_TYPE).toEqualTypeOf<FunctionType>();
  });

  it("should be `typeof <function>`", () => {
    expect(typeof (() => void 0)).toBe(FUNCTION_TYPE);
  });
});
