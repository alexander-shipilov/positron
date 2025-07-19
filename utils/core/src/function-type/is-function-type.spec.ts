import { describe, expect, it } from "@jest/globals";

import { FUNCTION_TYPE } from "./function-type";
import { isFunctionType } from "./is-function-type";

describe(`${isFunctionType.name}(value)`, () => {
  it("should be return `true` if `value` is a  `FunctionType`", () => {
    expect(isFunctionType(FUNCTION_TYPE)).toBe(true);
  });
});
