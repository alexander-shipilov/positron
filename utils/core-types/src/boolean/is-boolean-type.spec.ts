import { describe, expect, it } from "@jest/globals";

import { BooleanType } from "./boolean-type";
import { isBooleanType } from "./is-boolean-type";

describe(`${isBooleanType.name}(value)`, () => {
  it("should be return `true` if `value` is `BooleanType`", () => {
    expect(isBooleanType(BooleanType)).toBe(true);
  });
});
