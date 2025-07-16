import { describe, expect, it } from "@jest/globals";

import { FunctionType } from "./function-type";
import { isFunctionType } from "./is-function-type";

describe(`${isFunctionType.name}(value)`, () => {
  it("should be return `true` if `value` is `FunctionType`", () => {
    expect(isFunctionType(FunctionType)).toBe(true);
  });
});
