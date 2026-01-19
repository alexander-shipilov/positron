import type { Unit } from "./unit";
import { NumericType } from "./numeric-type";
import { NumericValue } from "./numeric-value";

export class UnitValue<TUnit extends Unit = Unit> extends NumericValue {
  public readonly unit: Unit;

  public value: number;

  // The UnitValue(value, unit) constructor must, when called, perform the
  // following steps:
  constructor(value: number, unit: TUnit) {
    // 1. If creating a type from unit returns failure, throw a TypeError and
    // abort this algorithm.
    const type = NumericType.fromUnit(unit);

    if (type == null) {
      throw new TypeError(
        `Failed to construct 'UnitValue': Invalid unit: ${unit}`,
      );
    }

    // 2. Return a new CSSUnitValue with its value internal slot set to value
    // and its unit set to unit.
    super(type);
    this.value = value;
    this.unit = unit;
  }

  isSameUnit(maybeSame: unknown): maybeSame is UnitValue<TUnit> {
    return maybeSame instanceof UnitValue && this.unit === maybeSame.unit;
  }

  serialize(): string {
    return "";
  }
}
