import { describe, expect, it } from "@jest/globals";

import { isNullType } from "./is-null-type";
import { NullType } from "./null-type";

describe(`${isNullType.name}(value)`, () => {
  it("should be return `true` if `value` is `NullType`", () => {
    expect(isNullType(NullType)).toBe(true);
  });
});
