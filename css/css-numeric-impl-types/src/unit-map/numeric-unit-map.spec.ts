import { describe, expect, it } from "@jest/globals";

import { CssUnit } from "@positron/css-unit";

import { toPower } from "../shared/to-power";

import { NumericUnitMap } from "./numeric-unit-map";

describe(`class ${NumericUnitMap.name}`, () => {
  const unit = CssUnit.px;
  const invalids = [
    ...[NaN, Infinity, -Infinity],
    ...[0.1, -0.1],
    ...[Number.MAX_SAFE_INTEGER + 1, Number.MIN_SAFE_INTEGER - 1],
  ];

  describe("new(entries?)", () => {
    it("should create an instance of `Map`", () => {
      expect(new NumericUnitMap()).toBeInstanceOf(Map);
      expect(new NumericUnitMap([])).toBeInstanceOf(Map);
      expect(new NumericUnitMap([[unit, 0]])).toBeInstanceOf(Map);
    });

    it(`should create an instance of \`${NumericUnitMap.name}\``, () => {
      expect(new NumericUnitMap()).toBeInstanceOf(NumericUnitMap);
    });

    it("should convert powers which is equal `-0` to `0`", () => {
      expect(new NumericUnitMap([[unit, -0]]).get(unit)).toBe(0);
    });
  });

  describe(".equals(map)", () => {
    it("should return `true` if `map` contains the same units with the \
        same powers", () => {
      const map = new NumericUnitMap([
        [CssUnit.px, 1],
        [CssUnit.px, 2],
      ]);

      expect(map.equals(map)).toBe(true);
      expect(map.equals(new NumericUnitMap(map))).toBe(true);
    });

    it("should return `false` if `map` contains a different count of \
        units", () => {
      const map = new NumericUnitMap([[CssUnit.px, 1]]);

      expect(map.equals(new NumericUnitMap())).toBe(false);
      expect(map.equals(new NumericUnitMap([...map, [CssUnit.q, 1]]))).toBe(
        false,
      );
    });

    it("should return `false` if `map` contains different powers", () => {
      const map = new NumericUnitMap([[CssUnit.px, toPower(1)]]);

      expect(map.equals(new NumericUnitMap([[CssUnit.px, 2]]))).toBe(false);
    });
  });

  describe(".mul(units)", () => {
    it("should add powers for matching units and preserve distinct units", () => {
      const a = new NumericUnitMap([
        [CssUnit.px, 1],
        [CssUnit.s, -1],
      ]);

      const b = new NumericUnitMap([
        [CssUnit.px, 2],
        [CssUnit.deg, 1],
      ]);

      const product = a.mul(b);

      expect([...product]).toEqual([
        ["px", 3],
        ["s", -1],
        ["deg", 1],
      ]);
    });

    it("should remove units whose resulting power equals `0`", () => {
      const a = new NumericUnitMap([[CssUnit.px, 1]]);
      const b = new NumericUnitMap([[CssUnit.px, -1]]);

      const product = a.mul(b);

      expect(product.size).toBe(0);
    });
  });

  describe(".set(unit, power)", () => {
    it(`should return an instance of \`${NumericUnitMap.name}\``, () => {
      expect(new NumericUnitMap().set(unit, 0)).toBeInstanceOf(NumericUnitMap);
    });

    it("should convert `power` which is equal to `-0` to `0`", () => {
      expect(new NumericUnitMap().set(unit, -0).get(unit)).toBe(0);
    });

    it("should throw a `RangeError` if `power` is not a safe integer", () => {
      invalids.forEach((invalid) => {
        expect(() => new NumericUnitMap().set(unit, invalid)).toThrow(
          RangeError,
        );
      });
    });
  });
});
