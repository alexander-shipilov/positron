import { describe, expect, it } from "@jest/globals";

import { isNullType } from "./is-null-type";
import { NULL_TYPE } from "./null-type";

describe(`${isNullType.name}(value)`, () => {
  it("should be return `true` if `value` is a `NullType`", () => {
    expect(isNullType(NULL_TYPE)).toBe(true);
  });
});
