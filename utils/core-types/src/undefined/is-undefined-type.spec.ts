import { describe, expect, it } from "@jest/globals";

import { isUndefinedType } from "./is-undefined-type";
import { UndefinedType } from "./undefined-type";

describe(`${isUndefinedType.name}(value)`, () => {
  it("should be return `true` if `value` is `UndefinedType`", () => {
    expect(isUndefinedType(UndefinedType)).toBe(true);
  });
});
