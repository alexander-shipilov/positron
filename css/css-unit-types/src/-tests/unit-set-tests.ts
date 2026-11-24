import { describe, expect, it } from "@jest/globals";

import type { CssUnit } from "../unit/css-unit";
import type { UnitSet } from "../utility/unit-set";

export function unitSetTests<TUnit extends CssUnit>(
  unitSet: UnitSet<TUnit>,
  expectedUnits: readonly TUnit[],
  excludedUnits: readonly string[] = [],
): void {
  const nonMemberUnits = [...excludedUnits, "unknown", ""];

  it("should contain all expected units", () => {
    expect([...unitSet]).toEqual(expectedUnits);
  });

  describe(".has(item)", () => {
    it("should return `true` if `item` is a member unit in lowercase", () => {
      for (const unit of expectedUnits) {
        expect(unitSet.has(unit)).toBe(true);
      }
    });

    it("should return `false` if `item` is uppercase or not a member unit", () => {
      for (const unit of expectedUnits) {
        expect(unitSet.has(unit.toUpperCase())).toBe(false);
      }

      for (const other of nonMemberUnits) {
        expect(unitSet.has(other)).toBe(false);
      }
    });
  });

  describe(".match(value)", () => {
    it("should return `true` if `value` is a member unit in any case", () => {
      for (const unit of expectedUnits) {
        expect(unitSet.match(unit)).toBe(true);
        expect(unitSet.match(unit.toUpperCase())).toBe(true);
      }
    });

    it("should return `false` if `value` is not a member unit", () => {
      for (const other of nonMemberUnits) {
        expect(unitSet.match(other)).toBe(false);
      }
    });
  });

  describe(".toUnit(value)", () => {
    it("should return lowercase unit if `value` is a member unit in any case", () => {
      for (const unit of expectedUnits) {
        expect(unitSet.toUnit(unit)).toBe(unit);
        expect(unitSet.toUnit(unit.toUpperCase())).toBe(unit);
      }
    });

    it("should return `null` if `value` is not a member unit", () => {
      for (const other of nonMemberUnits) {
        expect(unitSet.toUnit(other)).toBeNull();
      }
    });
  });
}
