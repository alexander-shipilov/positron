import { describe, expect, it } from "@jest/globals";

import { isUndefinedType } from "./is-undefined-type";
import { UNDEFINED_TYPE } from "./undefined-type";

describe(`${isUndefinedType.name}(value)`, () => {
  it("should be return `true` if `value` is a `UndefinedType`", () => {
    expect(isUndefinedType(UNDEFINED_TYPE)).toBe(true);
  });
});
