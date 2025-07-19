import { describe, expect, it } from "@jest/globals";

import { BOOLEAN_TYPE } from "./boolean-type";
import { isBooleanType } from "./is-boolean-type";

describe(`${isBooleanType.name}(value)`, () => {
  it("should be return `true` if `value` is a `BooleanType`", () => {
    expect(isBooleanType(BOOLEAN_TYPE)).toBe(true);
  });
});
