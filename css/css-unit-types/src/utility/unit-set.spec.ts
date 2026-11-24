import { describe, expect, it } from "@jest/globals";

import { UnitSet } from "./unit-set";

describe(`class ${UnitSet.name}`, () => {
  describe("new(units)", () => {
    it("should create an instance which contains the given `units`", () => {
      expect([...new UnitSet(["foo", "bar"])]).toEqual(["foo", "bar"]);
    });

    it("should throw `TypeError` if `units` contain non-lowercase strings", () => {
      expect(() => new UnitSet(["Foo"])).toThrow(TypeError);
    });
  });

  describe(".has(value)", () => {
    it("should return `true` if `value` is present among set units", () => {
      const frequency = new UnitSet(["hz", "khz"]);

      expect(frequency.has("hz")).toBe(true);
      expect(frequency.has("khz")).toBe(true);
    });

    it("should return `false` if `value` is not present among set units", () => {
      const frequency = new UnitSet(["hz", "khz"]);

      expect(frequency.has("Hz")).toBe(false);
      expect(frequency.has("kHz")).toBe(false);
      expect(frequency.has("foo")).toBe(false);
    });
  });

  describe(".match(value)", () => {
    it("should return `true` if set contains the `value` converted to \
        lowercase", () => {
      const frequency = new UnitSet(["hz", "khz"]);

      expect(frequency.match("hz")).toBe(true);
      expect(frequency.match("Hz")).toBe(true);
      expect(frequency.match("hZ")).toBe(true);
      expect(frequency.match("kHz")).toBe(true);
    });

    it("should return `value` if set does not contain the `value` converted to \
        lowercase", () => {
      const frequency = new UnitSet(["hz", "khz"]);

      expect(frequency.match("hz1")).toBe(false);
      expect(frequency.match("foo")).toBe(false);
    });
  });

  describe(".toUnit(value)", () => {
    it("should return a unit if set contains the `value` converted to \
        lowercase", () => {
      const frequency = new UnitSet(["hz", "khz"]);

      expect(frequency.toUnit("Hz")).toBe("hz");
      expect(frequency.toUnit("hZ")).toBe("hz");
      expect(frequency.toUnit("kHz")).toBe("khz");
    });

    it("should return `null` if set does not contain the `value` converted to \
        lowercase", () => {
      const frequency = new UnitSet(["hz", "khz"]);

      expect(frequency.toUnit("hz1")).toBeNull();
      expect(frequency.toUnit("foo")).toBeNull();
    });
  });
});
