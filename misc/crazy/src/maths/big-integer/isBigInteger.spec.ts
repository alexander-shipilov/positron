import { describe, expect, it } from "@jest/globals";

import { isBigInteger } from "./isBigInteger";
import { toBigInteger } from "./toBigInteger";

describe("isBigInteger(value)", () => {
  it("should return `true` if value is a `BigInteger`", () => {
    expect(isBigInteger(toBigInteger(1))).toBe(true);
    expect(isBigInteger(1)).toBe(false);
  });
});
