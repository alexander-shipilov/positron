import { describe, expect, it } from "@jest/globals";

import { BigintType } from "./bigint-type";
import { isBigintType } from "./is-bigint-type";

describe(`${isBigintType.name}(value)`, () => {
  it("should be return `true` if `value` is `BigintType`", () => {
    expect(isBigintType(BigintType)).toBe(true);
  });
});
