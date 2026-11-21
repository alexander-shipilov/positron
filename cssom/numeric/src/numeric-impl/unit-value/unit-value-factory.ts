import type { Unit } from "../unit";
import { $unit, $value } from "../internal";
import { NumericValueFactory } from "../numeric-value";
import { WeekMapRegistry } from "../registry/week-map-registry";

import type { UnitValueClass } from "./unit-value-class";
import type { UnitValueImpl } from "./unit-value-impl";

const registry = new WeekMapRegistry<UnitValueImpl, UnitValueClass>();

/**
 *
 */
export function UnitValueFactory(impl: UnitValueImpl): UnitValueClass {
  return registry.get(impl, () => {
    class UnitValue extends NumericValueFactory(impl) {
      public [$unit]!: Unit;

      public [$value]!: number;

      public get unit(): string {
        return this[$unit];
      }

      public get value(): number {
        return this[$value];
      }

      public set value(value: number) {
        impl.setUnitValue(this, value);
      }

      public constructor(value: number, unit: string) {
        super();

        impl.initUnitValue(this, value, unit);
      }
    }

    return UnitValue;
  });
}
