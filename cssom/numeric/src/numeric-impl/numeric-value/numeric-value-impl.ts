import type {
  CssMathSum,
  CssNumberish,
  CssNumericType,
  CssNumericValue,
  CssNumericValueClass,
  CssUnitValue,
} from "@positron/css-numeric";

export interface NumericValueImpl {
  readonly NumericValue: CssNumericValueClass;

  add($this: CssNumericValue, ...values: CssNumberish[]): CssNumericValue;

  div($this: CssNumericValue, ...values: CssNumberish[]): CssNumericValue;

  equals($this: CssNumericValue, ...values: CssNumberish[]): boolean;

  max($this: CssNumericValue, ...values: CssNumberish[]): CssNumericValue;

  min($this: CssNumericValue, ...values: CssNumberish[]): CssNumericValue;

  mul($this: CssNumericValue, ...values: CssNumberish[]): CssNumericValue;

  parse(cssText: string): CssNumericValue;

  serialize($this: CssNumericValue): string;

  sub($this: CssNumericValue, ...values: CssNumberish[]): CssNumericValue;

  to($this: CssNumericValue, unit: string): CssUnitValue;

  toSum($this: CssNumericValue, ...units: string[]): CssMathSum;

  type($this: CssNumericValue): CssNumericType;
}
