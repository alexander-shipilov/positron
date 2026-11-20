import type {
  CssMathSum,
  CssNumberish,
  CssNumericType,
  CssNumericValue,
  CssUnitValue,
} from "@positron/css-numeric";

import type { Type } from "../type";
import { $type } from "../-internal";
import { Registry } from "../registry";

import type { NumericValue as INumericValue } from "./numeric-value";
import type { NumericValueClass } from "./numeric-value-class";
import type { NumericValueImpl } from "./numeric-value-impl";

const registry = new Registry<NumericValueImpl, NumericValueClass>();

/**
 *
 */
export function NumericValueFactory(impl: NumericValueImpl): NumericValueClass {
  return registry.get(impl, () => {
    class NumericValue {
      public static parse(cssText: string): INumericValue {
        return impl.parse(cssText);
      }

      public [$type]!: Type;

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
