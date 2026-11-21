import type {
  CssMathSum,
  CssNumberish,
  CssNumericType,
  CssNumericValue,
  CssNumericValueClass,
  CssUnitValue,
} from "@positron/css-numeric";

import { WeekMapRegistry } from "../registry/week-map-registry";

import type { NumericValueImpl } from "./numeric-value-impl";

const registry = new WeekMapRegistry<NumericValueImpl, CssNumericValueClass>();

/**
 *
 */
export function NumericValueFactory(
  impl: NumericValueImpl,
): CssNumericValueClass {
  return registry.get(impl, () => {
    class NumericValue {
      public static parse(cssText: string): CssNumericValue {
        return impl.parse(cssText);
      }

      public add(...values: CssNumberish[]): CssNumericValue {
        return impl.add(this, ...values);
      }

      public div(...values: CssNumberish[]): CssNumericValue {
        return impl.div(this, ...values);
      }

      public equals(...values: CssNumberish[]): boolean {
        return impl.equals(this, ...values);
      }

      public max(...values: CssNumberish[]): CssNumericValue {
        return impl.max(this, ...values);
      }

      public min(...values: CssNumberish[]): CssNumericValue {
        return impl.min(this, ...values);
      }

      public mul(...values: CssNumberish[]): CssNumericValue {
        return impl.mul(this, ...values);
      }

      public sub(...values: CssNumberish[]): CssNumericValue {
        return impl.sub(this, ...values);
      }

      public to(unit: string): CssUnitValue {
        return impl.to(this, unit);
      }

      public toString(): string {
        return impl.serialize(this);
      }

      public toSum(...units: string[]): CssMathSum {
        return impl.toSum(this, ...units);
      }

      public type(): CssNumericType {
        return impl.type(this);
      }
    }

    return NumericValue;
  });
}
