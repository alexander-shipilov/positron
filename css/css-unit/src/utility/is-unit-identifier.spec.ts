import { describe, expect, it } from "@jest/globals";

import { isUnitIdentifier } from "./is-unit-identifier";

describe("function isUnitIdentifier", () => {
  it("should return `true` if `maybeUnit` is a non-empty lowercase string", () => {
    expect(isUnitIdentifier("px")).toBe(true);
    expect(isUnitIdentifier("hz")).toBe(true);
    expect(isUnitIdentifier("khz")).toBe(true);
  });

  it("should return `false` if `maybeUnit` is empty or contains uppercase \
      characters", () => {
    expect(isUnitIdentifier("")).toBe(false);
    expect(isUnitIdentifier("Px")).toBe(false);
    expect(isUnitIdentifier("PX")).toBe(false);
    expect(isUnitIdentifier("kHz")).toBe(false);
  });
});
