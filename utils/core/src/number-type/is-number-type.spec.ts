import { describe, expect, it } from "@jest/globals";

import { isNumberType } from "./is-number-type";
import { NUMBER_TYPE } from "./number-type";

describe(`${isNumberType.name}(value)`, () => {
  it("should be return `true` if `value` is a `NumberType`", () => {
    expect(isNumberType(NUMBER_TYPE)).toBe(true);
  });
});
