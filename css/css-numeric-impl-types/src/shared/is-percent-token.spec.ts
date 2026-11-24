import { describe, expect, it } from "@jest/globals";

import { isPercentToken } from "./is-percent-token";

describe("function isPercentToken(maybePercent)", () => {
  it("should return `true` if `maybePercent` is `%`", () => {
    expect(isPercentToken("%")).toBe(true);
  });

  it("should return `false` if `maybePercent` is not `%`", () => {
    expect(isPercentToken("")).toBe(false);
    expect(isPercentToken("percent")).toBe(false);
    expect(isPercentToken("px")).toBe(false);
  });
});
