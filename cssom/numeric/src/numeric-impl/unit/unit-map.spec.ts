import { describe, expect, it } from "@jest/globals";

import { CssUnit } from "@positron/css-unit";

import { UnitMap } from "./unit-map";

describe(`class ${UnitMap.name}`, () => {
  const unit = CssUnit.px;
  const invalids = [
    ...[NaN, Infinity, -Infinity],
    ...[0.1, -0.1],
    ...[Number.MAX_SAFE_INTEGER + 1, Number.MIN_SAFE_INTEGER - 1],
  ];

  describe("new(entries?)", () => {
    it("should create an instance of `Map`", () => {
      expect(new UnitMap()).toBeInstanceOf(Map);
      expect(new UnitMap([])).toBeInstanceOf(Map);
      expect(new UnitMap([[unit, 0]])).toBeInstanceOf(Map);
    });

    it(`should create an instance of \`${UnitMap.name}\``, () => {
      expect(new UnitMap()).toBeInstanceOf(UnitMap);
    });

    it("should convert powers which is equal `-0` to `0`", () => {
      expect(new UnitMap([[unit, -0]]).get(unit)).toBe(0);
    });

    it("should throw a `RangeError` if `entries` contain not safe integers", () => {
      invalids.forEach((invalid) => {
        expect(() => new UnitMap([[unit, invalid]])).toThrow(RangeError);
      });
    });
  });

  describe(".isEqual(map)", () => {
    it("should return `true` if `map` contains the same units with the same powers", () => {
      const map = new UnitMap([
        [CssUnit.px, 1],
        [CssUnit.px, 2],
      ]);

      expect(map.equals(map)).toBe(true);
      expect(map.equals(new UnitMap(map))).toBe(true);
    });

    it("should return `false` if `map` contains a different count of units", () => {
      const map = new UnitMap([[CssUnit.px, 1]]);

      expect(map.equals(new UnitMap())).toBe(false);
      expect(map.equals(new UnitMap([...map, [CssUnit.q, 1]]))).toBe(false);
    });

    it("should return `false` if `map` contains different powers", () => {
      const map = new UnitMap([[CssUnit.px, 1]]);

      expect(map.equals(new UnitMap([[CssUnit.px, 2]]))).toBe(false);
    });
  });

  describe(".set(unit, power)", () => {
    it(`should return an instance of \`${UnitMap.name}\``, () => {
      expect(new UnitMap().set(unit, 0)).toBeInstanceOf(UnitMap);
    });

    it("should convert `power` which is equal to `-0` to `0`", () => {
      expect(new UnitMap().set(unit, -0).get(unit)).toBe(0);
    });

    it("should throw a `RangeError` if `power` is not a safe integer", () => {
      invalids.forEach((invalid) => {
        expect(() => new UnitMap().set(unit, invalid)).toThrow(RangeError);
      });
    });
  });
});
