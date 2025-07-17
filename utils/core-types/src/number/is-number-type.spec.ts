import { describe, expect, it } from "@jest/globals";

import { isNumberType } from "./is-number-type";
import { NumberType } from "./number-type";

describe(`${isNumberType.name}(value)`, () => {
  it("should be return `true` if `value` is `NumberType`", () => {
    expect(isNumberType(NumberType)).toBe(true);
  });
});
