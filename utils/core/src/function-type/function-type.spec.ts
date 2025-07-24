import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { FunctionType } from "./function-type";
import { FUNCTION_TYPE } from "./function-type";

describe("FUNCTION_TYPE", () => {
  it("should be `typeof <function>`", () => {
    expect(typeof (() => null)).toBe(FUNCTION_TYPE);
  });
});

describe("FunctionType", () => {
  it("should be `typeof FUNCTION_TYPE`", () => {
    expectTypeOf<FunctionType>().toEqualTypeOf<typeof FUNCTION_TYPE>();
  });
});
