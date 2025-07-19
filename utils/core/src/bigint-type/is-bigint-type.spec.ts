import { describe, expect, it } from "@jest/globals";

import { BIGINT_TYPE } from "./bigint-type";
import { isBigintType } from "./is-bigint-type";

describe(`${isBigintType.name}(value)`, () => {
  it("should be return `true` if `value` is a `BigintType`", () => {
    expect(isBigintType(BIGINT_TYPE)).toBe(true);
  });
});
