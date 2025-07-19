import { describe, expect, it } from "@jest/globals";

import { isStringType } from "./is-string-type";
import { STRING_TYPE } from "./string-type";

describe(`${isStringType.name}(value)`, () => {
  it("should be return `true` if `value` is a `StringType`", () => {
    expect(isStringType(STRING_TYPE)).toBe(true);
  });
});
