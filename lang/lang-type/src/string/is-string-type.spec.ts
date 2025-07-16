import { describe, expect, it } from "@jest/globals";

import { isStringType } from "./is-string-type";
import { StringType } from "./string-type";

describe(`${isStringType.name}(value)`, () => {
  it("should be return `true` if `value` is `StringType`", () => {
    expect(isStringType(StringType)).toBe(true);
  });
});
